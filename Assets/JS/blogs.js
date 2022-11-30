 // import Swiper JS
//  import Swiper from 'swiper';
//  // import Swiper styles
//  import 'swiper/css';

menu_active = true;
 function menu_toggle() {
    var menu_button = document.getElementById("menu-button");
    var menu_close_button = document.getElementById("menu_close_button");
    var menu = document.querySelector(".navbar > ul");

    if(menu_active){
        menu_button.classList.replace("visible", "hidden")
        menu_close_button.classList.replace("hidden", "visible")
        menu_active = false;

        menu.style.animation = "slide-in 0.5s forwards"
    }else{
        menu_button.classList.replace("hidden", "visible")
        menu_close_button.classList.replace("visible", "hidden")
        menu_active = true;
        
        menu.style.animation = "slide-out 0.5s forwards";
    }
    
 }
