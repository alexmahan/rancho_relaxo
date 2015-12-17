export default class ConsoleLog {
	
 /**
  * Create the website for Rancho Relaxo
  * @param {Element} elem - the root element, save this for later
  * @param {Function}
  * @constructor
  */

	
	constructor(elem=document.body, consoleFunc) {
	  /**
	  * The root element
	  * @type {Element}
	  * @private
	  */
		
		this.elem = elem;
		this.consoleFunc = consoleFunc;
		this.start();
	}

    /**
    * @type {Function}
    * @private
    */

  start() {
		console.log("It's working");
  }

}