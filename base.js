var fs = require('fs');
var 
var kn = {hp:150,dam:20,speed:15,mag:3,defence:12,wepon1:startsword,wepon2:"none",items:items,}; 
var user = prompt("username: ")
var pas = prompt("pasword: ")
var items = "noune"
var login = prompt("chose one: ")
var pickcl = "knight mage archer assian thief chose one"
var pcl = prompt("")
console.log("if you have a acount type login if you dont type reg ")
login
if (login == "reg") {
console.log("tpye username);
  user
console.log("type pasword");
  pas
console.log("chouse a class")
console.log(pickcl)
  pcl
  
  fs.appendFile( user +'.txt'," players name: " + user + " pasword: " + pas + " class: " + pcl +, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  
}

