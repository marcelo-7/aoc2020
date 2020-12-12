var fs = require('fs');

var filename = 'data02.txt';

var hej = fs.readFile(filename, 'utf8', function(err, data) {

  if (err) throw err;

  console.log('OK: ' + filename);

  const content = data;

  processFile(content);

});



function processFile(content) {
	var counterValidPasswords = 0;
	var dataArray = content.split("\n").map(element => element.trim());
	//var dataArray = ['11-15 v: vdvvvvvsvvvvvfpv'];
	
	for (index = 0; index < dataArray.length; ++index) {
		var row = dataArray[index];
		var lb = getLowerBound(row);
		var ub = getUpperBound(row);
		var c = getChar(row);
		var pw = getPassword(row);
		
		
		var occurences= pw.split('').reduce(function (occurences,character) {
			
			if(character == c) {
				//console.log("ja");
				occurences++;
			}
			else {
				//console.log("nej")
			}
			return occurences;
		},0);
		
		counterValidPasswords += (lb<= occurences && occurences<=ub ? 1:0);
	}
	console.log(counterValidPasswords, "# of valid passwords");
  
}


function getLowerBound(string) {
	return string.split("-")[0];
}

function getUpperBound(string) {
	return string.split("-")[1].split(" ")[0];
}

function getChar(string) {
	return string.charAt(string.indexOf(' ')+1);
}

function getPassword(string) {
	return string.split(" ")[2]
}

function passwordIsValid(lb,ub,c,pw) {
	
}