var fs = require('fs');



fs.writeFile('playerdate.txt'," players name: " + user + " pasword: " + pas + " class: " + pcl + " items " + items + , function (err) {
  if (err) throw err;
  console.log('Saved!');
});
