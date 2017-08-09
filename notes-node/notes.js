const fs = require('fs');

const fetchNotes = () => {
	try {
		const notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		return [];
	}
};

const saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
	const notes = fetchNotes();
	const note = {
		title,
		body
	};
	const duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

const getAll = () => fetchNotes();


/**
*
*/
const getNote = (title) => {
	const notes = fetchNotes();
	return notes.find(n => n.title === title);
};

const removeNote = (title) => {
	const notes = fetchNotes();
	const filteredNotes = notes.filter(n => n.title !== title);
	if (notes.length !== filteredNotes.length) {
		saveNotes(filteredNotes);
		return true;
	} else {
		return false;
	}
};

const logNote = (note) => {
	console.log(`---`);
	console.log(`title: ${note.title}`);
	console.log(`body: ${note.body}`);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};
