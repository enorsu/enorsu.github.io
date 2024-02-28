

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


