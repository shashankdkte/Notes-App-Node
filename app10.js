const yargs = require("yargs");

const notes = require("./notes.js");
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
    //console.log("Title: ", argv.title, argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove Command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "removing a note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    //console.log("Removing a note! ");
    notes.removeNote(argv.title);
  },
});

//Create list Command
yargs.command({
  command: "list",
  describe: "List all notes",
  handler: function () {
    //console.log("Listing all notes! ");
    notes.listNotes();
  },
});

//Create read Command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Read a Note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Reading a note! ");
    notes.readNote(argv.title);
  },
});
//console.log(yargs.argv);
yargs.parse();
