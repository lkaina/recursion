// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (cName) {
	// your code here

	matchArray = [];
	startNode = document.body;

	var checkNodes = function(className, currentNode, matches) {
		if (typeof currentNode.classList !== 'undefined' && currentNode.classList.contains(className)) {
			matches.push(currentNode);
		}
		
		if (currentNode.hasChildNodes()){
			var children = currentNode.childNodes;

			for (var i = 0; i < children.length; i++) {
				checkNodes(className, children[i], matches);
		  	}
		}
		

	};

	checkNodes(cName, startNode, matchArray);
	return matchArray;
};
