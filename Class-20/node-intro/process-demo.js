function greet(names) {
    for (let name of names) {
        console.log(`Hello from ${name}`);
    }
}

const names = process.argv.slice(2);

// greet(names);


console.log(process.cwd());