export default class ConsoleLog {
	
	@param {Element}
	@param {Function}
	@constructor
	
	constructor(elem=document.body, consoleFunc) {
		@type {Element}
		@private
		
	this.elem = elem;
	}

		@type {Function}
		@private

	this.consoleFunc = consoleFunc

	if (this.consoleFunc) {
		console.log("It's working");
	}		
}