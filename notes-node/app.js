// const fs = require("fs");
// const _ = require("lodash");
const yargs = require('yargs');

const notes = require("./notes");


const titleOptions = {
	describe: "Title of note",
	demand: true,
	alias: "t"
};

const bodyOptions = {
	describe: "Body of note",
	demand: true,
	alias: "b"
};

const argv = yargs
	.command("add", "Add a new note", {
		title: titleOptions,
		body: bodyOptions
	})
	.command("list", "List all notes")
	.command("read", "Read a note", {
		title: titleOptions
	})
	.command("remove", "Remove a note", {
		title: titleOptions
	})
	.help()
	.argv;

var command = argv._[0];

if (command === "add") {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log(`Note "${note.title}" added.`);
	} else {
		console.log(`Note "${argv.title}" already exists.`);
	}
	notes.logNote(note);

} else if (command === "list") {
	var allNotes = notes.getAll();
	console.log(`Fetching all notes [${allNotes.length}]`);

	allNotes.forEach(note => notes.logNote(note));

} else if (command === "remove") {
	if (notes.removeNote(argv.title)) {
		console.log(`Note "${argv.title}" removed.`);
	} else {
		console.log(`Note "${argv.title}" does not exist.`);
	}

} else if (command === "read") {
	const note = notes.getNote(argv.title);
	console.log(`Reading note "${argv.title}" = [${note}]`);
	if (note) {
		notes.logNote(note);
	}
} else {
	console.log(`Command not recognized`);
}
