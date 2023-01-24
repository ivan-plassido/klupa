/**
 * Script connects to Mongo database (DB_NAME), deletes existing
 * documents from QUESTION_COLLECTION, CATEGORY_COLLECTION collections
 * and inserts new documents created from parsed CSV files found
 * recursively inside DATA_PATH directory 
 * CSV files should have question in first and answer in second column
 */

// CONFIGURATION BEGIN
const DATA_PATH = '../../../../Data/csv';
const USER = 'klupa';
const PASSWORD = 'Plassido2023'
const CLUSTER_URL = 'klupa.5mb9uaf.mongodb.net';
const DB_NAME = 'klupa';
const CATEGORY_COLLECTION = 'categories';
const QUESTION_COLLECTION = 'questions';
// CONFIGURATION END

const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const papa = require('papaparse');

async function dbInit() {
    categories = [];
    questions = [];
    buildCategories(null, null, categories, questions);
    const mongoUri = `mongodb+srv://${USER}:${PASSWORD}@${CLUSTER_URL}/?retryWrites=true&w=majority`;
    const client = new MongoClient(mongoUri);
    try {
        await client.connect();
        console.log('Successfully connected to mongo cluster');
        const db = client.db(DB_NAME);
        await dbClean(db);
        await db.collection(CATEGORY_COLLECTION).insertMany(categories);
        console.log('Inserted documents to collection: ' + CATEGORY_COLLECTION);
        await db.collection(QUESTION_COLLECTION).insertMany(questions);
        console.log('Inserted documents to collection: ' + QUESTION_COLLECTION);
    } catch (e) {
        console.error(e);
    } finally {
        console.log('Done');
        await client.close();
    }
}

async function dbClean(db) {
    await db.collection(CATEGORY_COLLECTION).deleteMany({});
    console.log('Cleared collection: ' + CATEGORY_COLLECTION);
    await db.collection(QUESTION_COLLECTION).deleteMany({});
    console.log('Clearing collection: ' + QUESTION_COLLECTION);
}

function buildCategories(path, parentId, categories, questions) {
    if (path === null) {
        path = DATA_PATH;
    }
    fs.readdirSync(path, { withFileTypes: true }).forEach(
        file => {
            console.log(`Discovered: ${path}/${file.name}`);
            if (file.isDirectory()) {
                const categoryId = uuidv4();
                categories.push({
                    _id: categoryId,
                    parentId,
                    name: file.name
                });
                buildCategories(`${path}/${file.name}`, categoryId, categories, questions);
            } else {
                buildQuestions(`${path}/${file.name}`, parentId, questions);
            }
        }
    );
}

function buildQuestions(filePath, categoryId, allQuestions) {
    try {
        const file = fs.readFileSync(filePath, 'utf8');
        const questions = [];
        papa.parse(file, {
            skipEmptyLines: true,
            step: function (row) {
                questions.push({ _id: uuidv4(), question: row.data[0], answer: row.data[1], categoryId: categoryId });
            },
            complete: function () {
                allQuestions.push(...questions);
            }
        });
    } catch (err) {
        console.error(err);
    }
}

dbInit().catch(console.error);
