(function(){
    "use strict";
    // console.log("hello");

    // head
    var header = document.getElementById("head");
    // set logo, nav area
        // logo img, title, nav mobile
    header.innerHTML = `<div id="logoBox">
        <a href="index.html"><img id="logo" src="images/logo.png" alt="logo"></a>
        </div>

        <h1>uselessappellation</h1>

        <img src="images/back.png" alt="back" class="navm" id="back">
        <img src="images/menu.png" alt="menu" class="navm" id="menu">`;


    // nav bar
    var navigation = document.getElementById("nav");
    // set to menu this menu
    navigation.innerHTML = `<ul>
        <li><a href="index.html">work</a></li>
        <li><a href="about.html">about</a></li>
        <li><a href="contact.html">contact</a></li>
        <li><a href="comms.html">commission</a></li>
    </ul>`;




    // img transitions n such
    var projs = document.getElementsByClassName("proj");
    var imgs = document.getElementsByClassName("imgs");
    var titles = document.getElementsByClassName("imgTitle");
    
    for (let i = 0; i < projs.length; i++){
        // // when hover over img sq, title appears and img lower opacity
        // projs[i].addEventListener('mouseover', function(){
        //     imgs[i].style.opacity = '40%';
        //     titles[i].style.opacity = '100%';
        // });
        // // return when not hov
        // projs[i].addEventListener('mouseout', function(){
        //     imgs[i].style.opacity = '100%';
        //     titles[i].style.opacity = '50%';
        // });

        // when hover over img sq, title disappears and img inc opacity
        projs[i].addEventListener('mouseover', function(){
            imgs[i].style.opacity = '100%';
            titles[i].style.opacity = '0';
        });
        // return when not hov
        projs[i].addEventListener('mouseout', function(){
            imgs[i].style.opacity = '40%';
            titles[i].style.opacity = '100%';
        });
    }

    var menu = document.getElementById("menu");
    var back = document.getElementById("back");
    const nav = document.getElementById("nav");
    var isDown = false;

    menu.addEventListener('click', function(){
        nav.style.top = '0';
        menu.style.zIndex = '7';
        back.style.zIndex = '8';

        back.style.opacity = '100%';
        menu.style.opacity = '0';
    });

    back.addEventListener('click', function(){
        nav.style.top = '-315px';
        back.style.zIndex = '7';
        menu.style.zIndex = '8';

        back.style.opacity = '0';
        menu.style.opacity = '100%';
    });

    


}());