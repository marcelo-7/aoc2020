var fs = require('fs');
var filename = 'data03.txt';
var hill;
var pos;
var treesEncountered;
var rowLen;
var colLen;
var additionalTreesEncountered;

fs.readFile(filename, 'utf8', function(err, data) {

  if (err) throw err;

  console.log('OK: ' + filename);

  const content = data;
  var multiplication = 1;
  
  // multiplication *= processFile(content,1,1);
  multiplication *= processFile(content,3,1);
  // multiplication *= processFile(content,5,1);
  // multiplication *= processFile(content,7,1);
  // multiplication *= processFile(content,1,2);
  console.log(multiplication, "product");

});

function processFile(content,r,d) {
	hill = content.split("\r\n");
	rowLen = hill[0].length;
	colLen = hill.length;
	pos = [0,0]; //y,x
	// pos = [322,5];
	treesEncountered = 0;
	additionalTreesEncountered = 0;
	
	
	for (iteration = 1; iteration <= colLen-1; iteration+d) {	//sista iterationen tar en till sista raden och då ska vi inte göra en till iteration, därav -1
		
		for(x = 1; x<=r; ++x) {
			moveRightOneStep(pos);
		}
		for(x = 1; x<=d; ++x) {
			if(moveDownOneStep(pos) == true) {
				console.log("reached the end");
				break;
			};
		}
		console.log(pos +" with " +additionalTreesEncountered +" trees encountered. Total: "+treesEncountered);
		resolveEnctounter(pos);
		additionalTreesEncountered = 0;
	}
	console.log(treesEncountered, "Total trees encountered.");
	return treesEncountered;
	
}

function moveRightOneStep(pos) {
	var xStart = pos[1];
	(xStart==30 ? pos[1]=0 : pos[1]=xStart+1 )
	//resolveEnctounter(pos);
}

function moveDownOneStep(pos) {
	var yStart = pos[0];
	pos[0]=yStart+1;
	if(pos[0] == hill.length-1) {
		return true;
	}
	else {
		return false;
	}
	
}

function resolveEnctounter(pos) {
	if(hill[pos[0]][pos[1]] == "#") {
		treesEncountered++;
		additionalTreesEncountered++;
	}
	// console.log(pos +" with " +treesEncountered +" trees encountered");
}

