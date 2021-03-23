const axios = require("axios");
const cat = require("./step1.js")

const fsP = require('fs/promises');
const argv = process.argv;

async function webCat(path) {
    let stringPath = path.toString()

    try {
        let contents = await axios.get(stringPath);
        console.log("file contents", contents.data);
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

let path = process.argv[2];

let resultPromise = path.startsWith("http")
    ? webCat(path)
    : cat(path);