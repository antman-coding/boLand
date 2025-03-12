var width = window.innerWidth
var height = window.innerHeight
randVariationX = 1
randVariationY = 1
document.addEventListener("DOMContentLoaded", function() {
    banana = document.getElementsByClassName("dvdBanana")[0];
    
    if (banana) {
    banana.style.left = String(getRndInteger(0, width-banana.getBoundingClientRect().width-5)) + "px"
    banana.style.top = String(getRndInteger(0, height-banana.getBoundingClientRect().height-5)) + "px"
    setInterval(bananaChangeWidth, 5)
    } else {
    console.error("Element with class 'dvdBanana' not found!");
    }
});



var direction = [1, 1]
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function getRandomNumberBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
function bananaChangeWidth (){
    var bananaPos = banana.getBoundingClientRect();
    banana.style.left = String(bananaPos.x + direction[0] * (width-bananaPos.width)/(height-bananaPos.height) * randVariationX) + "px"
    banana.style.top = String(bananaPos.y + direction[1] * randVariationY) + "px"
    if (bananaPos.x  + bananaPos.width >= width){
        direction[0] = -1
        randVariationX = getRandomNumberBetween(.5, 1.5)
        randVariationY = 2 - randVariationX
        
    } 
    if (bananaPos.y  + bananaPos.height >= height){
        direction[1] = -1
        randVariationX = getRandomNumberBetween(.5, 1.5)
        randVariationY = 2 - randVariationX
        
    } 
    if (bananaPos.x < 0){
        direction[0] = 1
        randVariationX = getRandomNumberBetween(.5, 1.5)
        randVariationY = 2 - randVariationX
        
    } 
    if (bananaPos.y  < 0 ){
        direction[1] = 1
        randVariationX = getRandomNumberBetween(.5, 1.5)
        randVariationY = 2 - randVariationX
        
    } 
}

window.addEventListener('resize', function() {
    width = window.innerWidth;
    height = window.innerHeight;
});
