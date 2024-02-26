const fs = require('fs');
const util = require('util');

// Promisifying fs.readFile
const readFromFile = util.promisify(fs.readFile);

// Function to write data to a JSON file
const writeToFile = (destination, content) => {
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info(`\nData written to ${destination}`);
    }
  });
};

// Function to read data from a file, append new content, and write back to the file
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend };