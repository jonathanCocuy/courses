/* 
? Export const to main.js file
*/
const myName = "Jonathan";
const myNumber = 30;
const myWebAdress = "www.jonathancocuy.com";

module.exports = { myName, myNumber, myWebAdress };

/* 
? Individual exports
*/
module.exports.myName = myName;
module.exports.myNumber = myNumber;
module.exports.myWebAdress = myWebAdress;
