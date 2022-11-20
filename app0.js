//Import file module
const fs = require("fs");
//fs.writeFileSync("notes.txt", "This file was created by Node.js!");
//fs.writeFileSync("notes.txt", "My Name is Khan");
fs.appendFileSync("notes.txt", " and I am not a terrorist");
