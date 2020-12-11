var fs = require('fs');

var filename = 'data1.txt';

var hej = fs.readFile(filename, 'utf8', function(err, data) {

  if (err) throw err;

  console.log('OK: ' + filename);

  const content = data;

  processFile(content);

});

 

function processFile(content) {
	
	var dataArray = content.split("\n").map(element => parseInt(element));
	var answerProductA;
	var answerProductB;

	while (dataArray.length>1) {

		var  productA = dataArray.pop();
		
		dataArray.forEach(function(productB) {
			if(productA + productB === 2020) {

				answerProductA = productA;
				answerProductB = productB;			
				console.log(answerProductA*answerProductB, "is the answer");
			}
		});
	}
}