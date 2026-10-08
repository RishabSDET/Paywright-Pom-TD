const fs = require('fs');
const { parse } = require('csv-parse/sync');

// This is just a simple tool we can use anywhere
exports.readCsv = function(filePath) {
    return parse(fs.readFileSync(filePath, 'utf-8'),
    {
        columns: true,
        skip_empty_lines: true
    });
};