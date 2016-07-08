const remote = require('electron').remote;
const {webFrame} = require('electron');
const main = remote.require('./index.js');

var lightToggle = 1;

$(".lumos").click(function(){
  if (lightToggle == 1){
  $("html").css("background-color", "black");
  lightToggle = 0;
  console.log(lightToggle);
}
else if (lightToggle == 0) {
  $("html").css("background-color", "white");
  lightToggle = 1;
}
});

image.addEventListener('touchstart', function(){
  $(".image").css("box-shadow", "10px 20px 30px black");
}, false)
$(".mainImage").click(function(){
  $(".mainimage").css("box-shadow", "10px 20px 30px black");
});
