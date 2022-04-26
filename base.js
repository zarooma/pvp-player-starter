var fs = require('fs');
var kn = {hp:150,dam:20,speed:15,mag:3,defence:12,wepon1:startsword,wepon2:"none",items:items,}; 
var user = console.prompt

fs.appendFile('playerdate.txt'," players name: " + user + " pasword: " + pas + " class: " + pcl + " items " + items + , function (err) {
  if (err) throw err;
  console.log('Saved!');
});
