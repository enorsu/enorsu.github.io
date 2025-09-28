

const videoPlayer = document.getElementById('videoplayer');

const playButton = document.getElementById('play-btn');
playButton.addEventListener('click', play);

const pauseButton = document.getElementById('pause-btn');
pauseButton.addEventListener('click', pause);

var scaleSlider = document.getElementById('scale');

var playBtn = document.getElementById('click-play');
playBtn.addEventListener('click', play);

var playing = false;


scaleSliderF()

function play() {
    if(playing) {
        videoPlayer.style.visibility = "hidden";
        playing = false;
        playBtn.innerHTML = "click to play";
        videoPlayer.pause();

    } else {
        videoPlayer.style.visibility = "visible";
        playing = true;
        playBtn.innerHTML = "click to stop playing";
        videoPlayer.play();
    }
;
}

function pause() {
    videoPlayer.pause();
    
}

function scaleVideo(size) {
    videoPlayer.width = 420 * size;
    videoPlayer.height = 360 * size;
}



document.body.oncontextmenu = function() {alert("right click is disabled :)"); return false;}