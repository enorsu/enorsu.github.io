

const videoPlayer = document.getElementById('videoplayer');

const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', play);

const pauseButton = document.getElementById('pause-btn');
pauseButton.addEventListener('click', pause);

var scaleSlider = document.getElementById('scale');

scaleSliderF()

function play() {
    videoPlayer.play();
}

function pause() {
    videoPlayer.pause();
    scaleSliderF();
}

function scaleVideo(size) {
    videoPlayer.width = 420 * size;
    videoPlayer.height = 360 * size;
}

function scaleSliderF() {
    scaleVideo(scaleSlider.value);
}

document.addEventListener('DOMContentLoaded', function(){
    var v = document.getElementById('v');
    var canvas = document.getElementById('c');
    var context = canvas.getContext('2d');

    var cw = Math.floor(canvas.clientWidth / 100);
    var ch = Math.floor(canvas.clientHeight / 100);
    canvas.width = cw;
    canvas.height = ch;

    v.addEventListener('play', function(){
        draw(this,context,cw,ch);
    },false);

},false);

function draw(v,c,w,h) {
    if(v.paused || v.ended) return false;
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,20,v,c,w,h);
}

