
const fs = require('fs');

const dataPath = './data/books.json';

const readFile = (callback, returnJSON = false, filePath = dataPath, encoding = 'utf8') => {
    fs.readFile(filePath, encoding, (err, data) => {

        if (err) {
            throw err;
        }
        callback(returnJSON ? JSON.parse(data) : data);
    })
};


const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {


    fs.writeFile(filePath, fileData, encoding, err => {
        if (err) {
            throw err;
        }
        callback();
    });
};

module.exports = { readFile, writeFile }