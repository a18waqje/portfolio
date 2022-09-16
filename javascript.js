/* This function shows the Information about skills , work experience and education when the user click on any of then in about section*/
let tabConts = document.getElementsByClassName("tabs-cont");

function openTab(tabnamn) {
  
    for (tabCont of tabConts) {
      tabCont.classList.remove("aktiv-t");
    }
    
  
    document.getElementById(tabnamn).classList.add("aktiv-t");
    
}
/* Functions for opening and closing Menu by clicking the button on a mobile phone display */
let menu = document.getElementById('menu');
function menuClose() {
     menu.style.right = "-210px";
}

function menuOpen() {
    menu.style.right = "0";
}
    
