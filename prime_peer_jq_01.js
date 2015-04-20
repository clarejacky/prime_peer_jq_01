//Utility function
//A simple random number generator
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

// Get random object from array
Array.prototype.getRandomObject = function() {
	var index = randomNumber(0, this.length -1);
	return this[index];
}

var lastNames = ["Smith", "Long", "Tailor", "Peters", "Vose"];
var femaleNames = ["Lindsey", "Clare", "Susan", "Lisa", "Becky"];
var maleNames = ["Peter", "Joe", "Ben", "Aaron", "Cody"];
var uniNames = ["Ari", "River", "Riley", "Cris"];
var genders = ["Female", "Male", "Other"];

function Person (age, gender, weight, lastName, firstName) {
	this.age = age;
	this.gender = gender;
	this.weight = weight;
	this.firstName = firstName;
	this.lastName = lastName;
}

//var person1 = new Person (23, "female", 100, "Smith", "Susan");
//console.log(person1);
function makePerson () {
	var age = randomNumber(1, 100);
	var weight = randomNumber(1, 100);
	var gender = genders.getRandomObject();
	var lastName = lastNames.getRandomObject();
	if (gender == "Female") {
		var firstName = maleNames.getRandomObject();
	} else if (gender == "Male") {
		var firstName = femaleNames.getRandomObject();

	} else {
		var firstName = uniNames.getRandomObject();
	}
	var person = new Person(age, gender, weight, lastName, firstName);
	return person;
}

var people = 0;

$(document).ready(function() {
	$("#btn").on("click", function () {
		var person = makePerson();
		people++;

		// Add the person to the table
		var personStuff = [person.firstName, person.lastName, person.age, person.gender, person.weight];
		var personId = "person" + people;
		var row = "<tr id='" + personId + "'></tr>";
		$("#personTable").append(row);
		for (var i=0; i<personStuff.length; i++) {
			$(("#" + personId)).append("<td>" + personStuff[i] + "</td>");
		}
	})
});
