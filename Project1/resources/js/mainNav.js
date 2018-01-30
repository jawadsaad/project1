
//var wheel = document.getElementById("wheelNav");
////wheel.addEventListener("click", expandWheel, false);
//
//var rot13 = document.getElementById("rot13");
//var seconds = document.getElementById("seconds");
//var fibonacci = document.getElementById("fibonacci");
//var powericon = document.getElementById("powericon");
//var timesicon = document.getElementById("timesicon");
//
//function expandWheel() {
//    powericon.classList.add('animateInner');
//    timesicon.classList.add('animateInner2');
//    wheel.classList.add('animate');
//    rot13.classList.add('animateRot');
//    seconds.classList.add('animateSeconds');
//    fibonacci.classList.add('animateFibonacci');
//}
//
//function unAnimate() {
//    power.classList.remove('animateInner');
//    times.classList.remove('animateInner2');
//    wheel.classList.remove('animate');
//    rot13.classList.remove('animateRot');
//    seconds.classList.remove('animateSeconds');
//    fibonacci.classList.remove('animateFibonacci');
//}
//

var piemenu = new wheelnav('piemenu');
piemenu.spreaderInTitle = icon.plus;
piemenu.spreaderOutTitle = icon.cross;
piemenu.spreaderRadius = piemenu.wheelRadius * 0.20;
piemenu.clockwise = false;
piemenu.wheelRadius = piemenu.wheelRadius * 0.83;
piemenu.createWheel();

function displayAbout() {
    document.getElementById('about').style.opacity('1');
}