// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var toType = function(obj) {
  		return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	};

	var getString = function(newObj){
		var oType = toType(newObj);
		
		if (oType === 'object') {
			var result = [];
			for (var prop in newObj){
				if (!(toType(newObj[prop]) === 'function' || toType(newObj[prop]) === 'undefined')){ result.push('"'+prop+'":'+stringifyJSON(newObj[prop])); }
			}
			return '{'+result+'}';
		}
		else if(oType === 'array'){
			var result = [];
			for (var i = 0; i < newObj.length; i++){
				 result.push(stringifyJSON(newObj[i]));
			}
			return '['+result+']';
		}
	  	
		else if(oType === 'string'){
			return '"'+newObj+'"';
		}

		else return String(newObj);
	};

	return getString(obj);

};
