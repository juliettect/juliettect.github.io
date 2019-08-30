function show() {
    document.getElementById("glow1").style.opacity = 1;
    document.getElementById("nut1").style.opacity = 1;
    document.getElementById("menu1").style.opacity = 1;
    hidetext();
}
function hide() {
    document.getElementById("glow1").style.opacity = 0;
    document.getElementById("nut1").style.opacity = 0;
    document.getElementById("menu1").style.opacity = 0;
    showtext();
}
function show2() {
    document.getElementById("glow2").style.opacity = 1;
    document.getElementById("nut2").style.opacity = 1;
    document.getElementById("menu2").style.opacity = 1;
    hidetext();
}
function hide2() {
    document.getElementById("glow2").style.opacity = 0;
    document.getElementById("nut2").style.opacity = 0;
    document.getElementById("menu2").style.opacity = 0;
    showtext();
}
function show3() {
    document.getElementById("glow3").style.opacity = 1;
    document.getElementById("nut3").style.opacity = 1;
    document.getElementById("menu3").style.opacity = 1;
    hidetext();
}
function hide3() {
    document.getElementById("glow3").style.opacity = 0;
    document.getElementById("nut3").style.opacity = 0;
    document.getElementById("menu3").style.opacity = 0;
    showtext();
}
function show4() {
    document.getElementById("glow4").style.opacity = 1;
    document.getElementById("nut4").style.opacity = 1;
    document.getElementById("menu4").style.opacity = 1;
    hidetext();
}
function hide4() {
    document.getElementById("glow4").style.opacity = 0;
    document.getElementById("nut4").style.opacity = 0;
    document.getElementById("menu4").style.opacity = 0;
    showtext();
}
function show5() {
    document.getElementById("glow5").style.opacity = 1;
    document.getElementById("nut5").style.opacity = 1;
    document.getElementById("menu5").style.opacity = 1;
    hidetext();
}
function hide5() {
    document.getElementById("glow5").style.opacity = 0;
    document.getElementById("nut5").style.opacity = 0;
    document.getElementById("menu5").style.opacity = 0;
    showtext();
}
function loadtext() {
    document.getElementById("text1").className += " load";
    setTimeout(function(){
        document.getElementById("text2").className += " load";
    }, 1000);
    setTimeout(function(){
        document.getElementById("text3").className += " load";
    }, 1000);
}
function hidetext() {
    document.getElementById("text1").style.opacity = 0;
}

function showtext() {
    document.getElementById("text1").style.opacity = 1;
}
