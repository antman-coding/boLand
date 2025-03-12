document.addEventListener("DOMContentLoaded", function() {
    window.list = document.getElementsByTagName("li")
    window.listNum = list.length
    window.pointer = 0
    setInterval(rotateListDecoration, 50)
})
function rotateListDecoration(){
    if (pointer > 0) {
        list[(pointer - 1) % listNum].style.listStyleType = "disc";
        list[(pointer) % listNum].style.listStyleType = "disc";
        
      }
    list[pointer%listNum].style.listStyleType = "circle"
    list[(pointer+1)%listNum].style.listStyleType = "circle"
    
    pointer++;
}