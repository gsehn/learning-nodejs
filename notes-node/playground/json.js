// var obj = {
// 	name: `Andrew`
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew", "age": 25}';
// var personObj = JSON.parse(personString);
//
// console.log(typeof personObj);
// console.log(`personObj.name=${personObj.name} personObj.age=${personObj.age}`);
// console.log(personObj);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
};

fs.writeFileSync('notes.json', JSON.stringify(originalNote));
var noteString = fs.readFileSync('notes.json');
var noteObj = JSON.parse(noteString);

console.log(typeof noteObj);
console.log(`title=[${noteObj.title}]`);
