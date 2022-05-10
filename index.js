var fs = require('fs');
var startsword = {dam:dam + 3,defense:5}
var kn = {luck:10 ,hp:150,dam:20,speed:15,mag:3,defence:12,wepon1:startsword,wepon2:"none",items:items,}; 
var user = prompt("username: ")
var pas = prompt("pasword: ")
var items = "noune"
var login = prompt("chose one: ")
var pickcl = "knight mage archer assian thief chose one"
var pcl = prompt("")
var crit = math.floor(math.random() * 101);
console.log("if you have a acount type login if you dont type reg ")
login
if (login == "reg") {
console.log("tpye username");
  user
fs.readFile('user.txt', 'players name:' + user + function (err) {
  if (err) throw err;
 console.log('valid');
});
console.log("type pasword");
  pas
console.log("chouse a class")
console.log(pickcl)
  pcl
  
  fs.appendFile( 'user.txt'," players name: " + user + " pasword: " + pas + " class: " + pcl + function (err) {
  if (err) throw err;
  console.log('Saved!');
});
  
} else if (login == "login") {
  console.log(`tpye username ${user}`)
  console.log(`type pasword ${pas}`)
  fs.readFile('user.txt', function (err, data) {
  if (err) throw err;
  if(data.includes(" players name: " + user + " pasword: " + pas)){
   console.log(corect)
  }
});
  
}
if (login == "reg") {
console.log(`wellcome ${user}`)
}

