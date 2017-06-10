"use strict";


// var slider = document.getElementsByClassName("box-1");
// var i = 1;
// var interval = setInterval(function (){
//     slider[i].style.marginLeft = -300 + "px";
//     // slider[i].style.opacity = 0.8;
//     i++;
//    if (i >slider.length-1){
//         clearInterval(interval);
//    }
//
//
// },2000);


// console.log(window);
// console.log(localStorage);
//
//
// var boy = {
//     name : "Rostyk",
//     age : 20,
//     gender : "male"
// }
//
// localStorage.setItem("1488", JSON.stringify(boy));
//
// console.log(localStorage.getItem("1488"));
//
// var parse = JSON.parse(localStorage.getItem("1488"));
// console.log(parse);
//
//
// function setCookie(){
//     console.log(document.cookie = "rostyk=123")
// }
//
// function getCookie(){
//     console.log(document.cookie);
// }
//
//
// function reload(){
//     window.location.reload();
// }
//
// function href(){
//     window.location.href = "http://owu.com.ua/ru/";
// }
//
// function redirect(){
//     window.location.replace("http://owu.com.ua/ru/");
// }
//
// console.log(screen.width, screen.height, screen.availWidth, screen.availHeight);
//
// console.log(navigator.platform);
//
// navigator.geolocation.getCurrentPosition(function (pos){
//     console.log(pos.coords.latitude, pos.coords.longitude);
// })




function initMap() {
    navigator.geolocation.getCurrentPosition(function (pos) {

            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: pos.coords.latitude, lng: pos.coords.longitude},
                scrollwheel: true,
                zoom: 8,
                backgroundColor : "yellow"
            });
        }
    );
}