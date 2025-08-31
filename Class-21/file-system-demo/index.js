const { readFile, writeFile } = require('node:fs/promises');
const path = require('path');

const FILE_PATH_1 = path.join(__dirname, 'files', 'abc.txt');
const FILE_PATH_2 = path.join(__dirname, 'files', 'xyz.txt');



async function main() {
    // const data = await readFile(FILE_PATH_1, { encoding: 'utf-8' });

    await writeFile(FILE_PATH_2, "Writing using nodejs\nThis is now a new line");
    
    // console.log(data);
}

main();
