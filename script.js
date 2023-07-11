var database = [
	{
		username: "User1",
		password: "password"
	},
	{
		username: "User2",
		password: "123"
	},
	{
		username: "User3",
		password: "456"
	}
];

var newsfeed = [
	{
		username: "Donald",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Johnny",
		timeline: "JavaScript is so cool!"
	},
	{
		username: "Jack",
		timeline: "I like Java!"
	}
];

function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
		if (database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password");
	}
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);
