window.onload = function() {
setTimeout(() => {
    document.body.style.backgroundImage = "url('images/background.jpg')"
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "100%"
}, 11000);
    setTimeout(() => {
        document.getElementById("vid1").src="https://www.youtube.com/embed/8R5AlJ1V8Wg?controls=0;&start=1;&autoplay=1;&mute=0";
        document.getElementById("vid2").src="https://www.youtube.com/embed/8R5AlJ1V8Wg?controls=0;&start=1;&autoplay=1;&mute=0";
        document.getElementById("vid1").style.display = "block"
        document.getElementById("vid2").style.display = "block"
        document.getElementById("vid3").style.display = "none"
        document.getElementById("text").style.display = "block"
        document.getElementById("text").style.color = "green"
    }, 18000);
    setTimeout(() => {
        document.getElementById("vid1").style.display = "none"
        document.getElementById("vid2").style.display = "none"
    }, 139000);
};