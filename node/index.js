let username = "";
let password = "";

let age = 29;
let points = [10, 20, 30];

let user = {
  name: "Ryan",
  lastname: "Ray",
};

console.log(user.name, user.lastname);
console.log(points);

if (age >= 30) {
  console.log("Welcome, " + user.name);
} else {
  console.log("Sorry, you are not old enough.");
}

function showUser(userTag, UserAge) {
  return `His name is ${userTag}, and your age is ${UserAge}`;
}

console.log(showUser("Jonathan", 22));
