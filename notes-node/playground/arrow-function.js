let square = x => x*x;

let mult = (x, y) => x*y;

console.log(square(9));

console.log(mult(2, 3));

var user = {
	name: "Guenther",
	sayHi: () => {
		console.log(`Hi, I'm ${this.name}`);
		console.log(arguments);
	},
	sayHiAlt () {
		console.log(`Hi, I'm ${this.name}`);
		console.log(arguments);
	}
};

user.sayHiAlt(1, 2, 3);
