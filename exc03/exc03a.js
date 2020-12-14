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

  processFile(content);

});

function processFile(content) {
	hill = content.split("\r\n");
	rowLen = hill[0].length;
	colLen = hill.length;
	pos = [0,0]; //y,x
	// pos = [322,5];
	treesEncountered = 0;
	additionalTreesEncountered = 0;
	
	
	for (iteration = 1; iteration <= colLen-1; ++iteration) {	//sista iterationen tar en till sista raden och då ska vi inte göra en till iteration, därav -1
		moveRightOneStep(pos);
		moveRightOneStep(pos);
		moveRightOneStep(pos);
		moveDownOneStep(pos);
		//console.log(pos +" with " +additionalTreesEncountered +" trees encountered. Total: "+treesEncountered);
		additionalTreesEncountered = 0;
	}
	console.log(treesEncountered, "Total trees encountered.");
	
}

function moveRightOneStep(pos) {
	var xStart = pos[1];
	(xStart==30 ? pos[1]=0 : pos[1]=xStart+1 )
	//resolveEnctounter(pos);
}

function moveDownOneStep(pos) {
	var yStart = pos[0];
	pos[0]=yStart+1;
	resolveEnctounter(pos);
}

function resolveEnctounter(pos) {
	if(hill[pos[0]][pos[1]] == "#") {
		treesEncountered++;
		additionalTreesEncountered++;
	}
	// console.log(pos +" with " +treesEncountered +" trees encountered");
}

