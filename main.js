const remote = require('electron').remote;
const {webFrame} = require('electron');
const main = remote.require('./index.js');
$('.image').css('box-shadow', '10px 10px 5px #888');
