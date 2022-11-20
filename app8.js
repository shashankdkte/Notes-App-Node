const yargs = require("yargs");

yargs.version("1.1.0");

//Create add Command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Adding a new note! ");
    console.log("Title: ", argv.title, argv.body);
  },
});

//Create remove Command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a note! ");
  },
});

//Create list Command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    console.log("Listing all notes! ");
  },
});

//Create read Command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note! ");
  },
});
//console.log(yargs.argv);
yargs.parse();
