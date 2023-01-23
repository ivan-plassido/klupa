const csvDir = '../../../../Data/csv';
const assetsDirQuestions = '../../assets/questions/'
const assetsDirCategories = '../../assets/categories/'
const fs = require('fs');
const papa = require('papaparse');
const { v4: uuidv4 } = require('uuid')

categories = [];
questions = [];

deleteOldAssets();
generateAssets(null, null, categories);
generateCategoriesAsset(categories);

function generateAssets(path, parentId, categories) {
    if (path === null) {
        path = csvDir;
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
            header: false,
            columns: [
                "question", "answer"
            ],
            step: function (row) {
                questions.push({ question: row.data[0], answer: row.data[1], id: uuidv4(), categoryId: categoryId });
            },
            complete: function () {
                fs.writeFile(`${assetsDirQuestions}/${categoryId}.json`, JSON.stringify(questions), 'utf8', () => { });
            }
        });
    });
}

function generateCategoriesAsset(categories) {
    fs.writeFile(`${assetsDirCategories}/categories.json`, JSON.stringify(categories), 'utf8', () => { });
}

function deleteOldAssets() {
    fs.readdirSync(assetsDirQuestions).forEach(file => {
        fs.unlinkSync(assetsDirQuestions + file);
    });
    fs.readdirSync(assetsDirCategories).forEach(file => {
        fs.unlinkSync(assetsDirCategories + file);
    });
}

