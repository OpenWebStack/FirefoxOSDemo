function getVibrationForCharacter(character) {
	switch (character)
	{
		case 'a': return [100, 100, 300, 300];
		case 'b': return [300, 100, 100, 100, 100, 100, 100, 300];
		case 'c': return [300, 100, 100, 100, 300, 100, 100, 300];
		case 'd': return [300, 100, 100, 100, 100, 300];
		case 'e': return [100, 300];
		case 'f': return [100, 100, 100, 100, 300, 100, 100, 300];
		case 'g': return [300, 100, 300, 100, 100, 300];
		case 'h': return [100, 100, 100, 100, 100, 100, 100, 300];
		case 'i': return [100, 100, 100, 300];
		case 'j': return [100, 100, 300, 100, 300, 100, 300, 300];
		case 'k': return [300, 100, 100, 100, 300, 300];
		case 'l': return [100, 100, 300, 100, 100, 100, 100, 300];
		case 'm': return [300, 100, 300, 300];
		case 'n': return [300, 100, 100, 300];
		case 'o': return [300, 100, 300, 100, 300, 300];
		case 'p': return [100, 100, 300, 100, 300, 100, 100, 300];
		case 'q': return [300, 100, 300, 100, 100, 100, 300, 300];
		case 'r': return [100, 100, 300, 100, 100, 300];
		case 's': return [100, 100, 100, 100, 100, 300];
		case 't': return [300, 300];
		case 'u': return [100, 100, 100, 100, 300, 300];
		case 'v': return [100, 100, 100, 100, 100, 100, 300, 300];
		case 'w': return [100, 100, 300, 100, 300, 300];
		case 'x': return [300, 100, 100, 100, 100, 100, 300, 300];
		case 'y': return [300, 100, 100, 100, 300, 100, 300, 300];
		case 'z': return [300, 100, 300, 100, 100, 100, 100, 300];
		case '1': return [100, 100, 300, 100, 300, 100, 300, 100, 300, 300];
		case '2': return [100, 100, 100, 100, 300, 100, 300, 100, 300, 300];
		case '3': return [100, 100, 100, 100, 100, 100, 300, 100, 300, 300];
		case '4': return [100, 100, 100, 100, 100, 100, 100, 100, 300, 300];
		case '5': return [100, 100, 100, 100, 100, 100, 100, 100, 100, 300];
		case '6': return [300, 100, 100, 100, 100, 100, 100, 100, 100, 300];
		case '7': return [300, 100, 300, 100, 100, 100, 100, 100, 100, 300];
		case '8': return [300, 100, 300, 100, 300, 100, 100, 100, 100, 300];
		case '9': return [300, 100, 300, 100, 300, 100, 300, 100, 100, 300];
		case '0': return [300, 100, 300, 100, 300, 100, 300, 100, 300, 300];
		case ' ': return [0, 400];
		default: return [];
	}
}

function getVibrationPattern(theString) {
	// For each character in the string find the vibration pattern and add it to the result array
	var lower = theString.toLowerCase();
	var result = [];
	for (var i = 0; i < lower.length; i++) {
		var charPattern = getVibrationForCharacter(lower.charAt(i));
		for (var j = 0; j < charPattern.length; j++) {
			result.push(charPattern[j]);
		}
	}

	return result;
}