const fs = require('node:fs/promises');
const path = require('node:path');

function readFile(path) {
    return fs.readFile(path, { encoding: 'utf-8' });
}

function writeFile(path, data) {
    return fs.writeFile(path, data);
}

async function main() {
    const FILE_1 = path.join(__dirname, 'files', 'file1.txt');
    const FILE_2 = path.join(__dirname, 'files', 'file2.txt');
    const FILE_3 = path.join(__dirname, 'files', 'file3.txt');

    // Reading a file
    const file1Content = await readFile(FILE_1);
    const file2Content = await readFile(FILE_2);

    // splittingfiles
    const arr1 = file1Content.split('\n');
    const arr2 = file2Content.split('\n');

    // merge the numbers
    const res = arr1.concat(arr2);

    // sort and construct back the string
    const data = res.sort((a, b) => a - b).join('\n');

    //write data to the file3
    
    await writeFile(FILE_3, data);
    console.log('Everything done')
}

main();