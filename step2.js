const axios = require("axios");

const fsP = require('fs/promises');
const argv = process.argv;

async function webCat(path) {
    let stringPath = path.toString()
    try {
        let contents = await axios.get(stringPath);
        fsP.readFile(contents.data, "utf8");
        console.log("file contents", contents);
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

webCat(argv[2]);