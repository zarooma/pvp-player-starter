var fs = require('fs');
fs.writeFile('playerdate.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
