var KeyManager = {
	keyLogger:new Array(),
	init:function() {
		this.keyLogger = ['','','','','','','','','','']; //10 blank characters
		$(document).keyup(KeyManager.KEY_UP);
		$(document).keydown(KeyManager.KEY_DOWN);
		$(document).keypress(KeyManager.KEY_PRESSED);
	},
	getLastCharacters:function(count) {
		if (!count || count < 1 || count > this.keyLogger.length) {
			count = this.keyLogger.length;
		}
		count = parseInt(count);
		
		return (this.keyLogger.join('')).substr(0,count);
	},
	keyLog:function(charCode) {
		this.keyLogger.push(String.fromCharCode(charCode));
		return this.keyLogger.shift();
	},
	test:function(comparisonString) {
		var stringLength = comparisonString.length;
		if (stringLength > this.keyLogger.length) {
			return false;
		} else {
			return (this.getLastCharacters(stringLength) == comparisonString);
		}
	},
	KEYCODE_ENTER:13,
	KEYCODE_BACKSPACE:8,
	KEYCODE_SPACEBAR:32,
	KEYCODE_TAB:9,
	KEYCODE_UP:38,
	KEYCODE_DOWN:40,
	KEYCODE_LEFT:37,
	KEYCODE_RIGHT:39,
	KEYCODE_SHIFT:16,
	KEY_UP:function(event) {
		console.log("keyup: " + event.keyCode);
	},
	KEY_DOWN:function(event) {
		console.log("keydown: " + event.keyCode);
	},
	KEY_PRESSED:function(event) {
		//console.log("keypressed: " + event.keyCode);
		//console.log("Actual char: " + String.fromCharCode(event.keyCode));
		KeyManager.keyLog(event.keyCode);
		//console.log(KeyManager.getLastCharacters());
	}
}
