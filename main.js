const remote = require('electron').remote;
const {webFrame} = require('electron');
const main = remote.require('./index.js');
function buttonPress() {
  main.displayText();
}
