/**
 * Script parses CSV files recursively found inside CSV_ROOT_PATH
 * and generates categories and questions JSON files
 * CSV files should have question in first and answer in second column
 */

// CONFIGURATION BEGIN
const CSV_ROOT_PATH = '../../../../Data/csv';
const QUESTION_ASSETS_PATH = '../../assets/questions/';
const CATEGORY_ASSETS_PATH = '../../assets/categories/';
// CONFIGURATION END

const fs = require('fs');
const papa = require('papaparse');
const { v4: uuidv4 } = require('uuid');

categories = [];
questions = [];

deleteOldAssets();
generateAssets(null, null, categories);
generateCategoriesAsset(categories);

function generateAssets(path, parentId, categories) {
    if (path === null) {
        path = CSV_ROOT_PATH;
    }
    fs.readdirSync(path, { withFileTypes: true }).forEach(
        file => {
            console.log(`Discovered: ${path}/${file.name}`);
            if (file.isDirectory()) {
                const categoryId = uuidv4();
                categories.push({
                    id: categoryId,
                    parentId,
                    name: file.name
                });
                generateAssets(`${path}/${file.name}`, categoryId, categories);
            } else {
                generateQuestionsAsset(`${path}/${file.name}`, parentId);
            }
        }
    );
}


function generateQuestionsAsset(filePath, categoryId) {
    fs.readFile(filePath, 'utf8', (err, file) => {
        const questions = [];
        papa.parse(file, {
            skipEmptyLines: true,
            step: function (row) {
                questions.push({ question: row.data[0], answer: row.data[1], id: uuidv4(), categoryId: categoryId });
            },
            complete: function () {
                const questionsPath = `${QUESTION_ASSETS_PATH}${categoryId}.json`;
                fs.writeFile(questionsPath, JSON.stringify(questions), 'utf8', () => { });
                console.log('Created questions: ' + questionsPath);
            }
        });
    });
}

function generateCategoriesAsset(categories) {
    const categoriesPath = `${CATEGORY_ASSETS_PATH}categories.json`;
    fs.writeFile(categoriesPath, JSON.stringify(categories), 'utf8', () => { });
    console.log('Created categories: ' + categoriesPath);
}

function deleteOldAssets() {
    fs.readdirSync(QUESTION_ASSETS_PATH).forEach(file => {
        fs.unlinkSync(QUESTION_ASSETS_PATH + file);
    });
    console.log('Deleted old question assets');
    fs.readdirSync(CATEGORY_ASSETS_PATH).forEach(file => {
        fs.unlinkSync(CATEGORY_ASSETS_PATH + file);
    });
    console.log('Deleted old category assets');
}

