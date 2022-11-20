const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => {
  return " Your notes... ";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  //console.log(notes);
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    // console.log("Note added");
    console.log(chalk.green("Note added"));
  } else {
    console.log(chalk.red("Note already taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => {
    return note.title !== title;
  });
  if (notes.length === newNotes.length) {
    console.log(chalk.red("No Note Found!"));
  } else {
    console.log(chalk.green("Note removed!"));
    saveNotes(newNotes);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bold.green("Your Notes"));
  notes.forEach((note) => {
    console.log(chalk.bold(note.title));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => note.title === title);
  if (noteToRead) {
    console.log(chalk.green.bold(noteToRead.title));
    console.log(chalk.bold.inverse(noteToRead.body));
  } else {
    console.log(chalk.red("No note found"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
