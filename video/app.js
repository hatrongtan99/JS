var switchBtn = document.querySelector('.switch-btn');
var video = document.querySelector('.video-container');
switchBtn.onclick = function() {


    if (!this.classList.contains('slide')) {

        this.classList.add('slide');
        video.pause();        
    } else {
        this.classList.remove('slide')
        video.play();

    }
};

// preloader

const preloader = document.querySelector('.preloader');

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader')
});

