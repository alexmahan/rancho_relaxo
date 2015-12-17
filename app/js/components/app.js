import ConsoleLog from '../components/consolelog.js';

/**
* The very tip top of the A-Frame (short for Application Frame)
*/
export default class Application {

  /**
  * Create the website for Rancho Relaxo
  * @param {Element} elem - the root element, save this for later
  * @constructor
  */

  constructor(elem=document.body) {

    /**
    * The root element
    * @type {Element}
    * @private
    */

    this.elem = elem;
  }

  /**
  * Run this site and make a console log
  */

  start() {
    this.Logger = new ConsoleLog(this.elem, this.consoleFunc);
  }
}

  const ranchoRelaxo = new Application();
  ranchoRelaxo.start();