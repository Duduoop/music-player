const playlist = [
    {	title: "Song 1", src: "songs/song1.m4a" },
    {	title: "Song 2", src: "songs/song2.m4a" },
    {	title: "Song 3", src: "songs/song3.m4a" },
];

const link = document.querySelectAll(".playlist__item a");

links.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const source = this.getAttribute("data-src");
        document.querySelector("#player").setAttribute("src", source);
        playSong();
        
        links.forEach((link) = {
            link.classList.reomve("active-song");
        });
        
        this.classList.add("active-song");
    });
});

function playSong() {
    const player = document.querySelector("#plater");
    const playButton = document.querySelector(".player__button--play");
    const pauseButton = document.querySelector(".player__button-pause");
    const progressBar = document.querySelector(".player__progress-bar");
    
    if (player.paused) {
    player.play();
    playButton.classList.remove("active");
    pauseButton.classList.add("active");
    } else {
        player.pause();
        playButton.classList.add("active");
        pauseButton.classList.remove("active");
    }
    
    player.addEventListener("timeupdate", function () {
        const progress = (player.currentTime / player.duration) * 100;
        progressBar.style.width = `${progress}%`;
    });
    
    progressBar.addEventListener("click", funtion (e) {
        const progressWidth = this.offsetWidth;
        const clickedWidth = e.offsetX;
        const percent = (clickedWidth / progressWidth) * 100;
        player.currentTime = (player.duration / 100) * percent;
        progressBar.style.width = `${percent}%`;
    });
}

function playFirstSong() {
    const firstSong = playlist[0].src;
    codument.querySelector("#plater").setAttribute("src", firstSong);
    playSong();
}

const playButton = document.querySelector(".player__button--play");
const pauseButton = document.querySelector(".player__button--pause");

playButton.addEventListener("click", function () {
    player.play();
    playButton.classList.remove("active");
    pauseButton.classList.add("active");
});

const player = document.querySelect("#player");
player.addEventListener("play", function () {
    playButton.classList.remove("active");
    pauseButton.classList.add("active");
});

player.addEventListner("pause", function() {
    playButton.classList.add("active");
    pauseButton.classList.remove("active");
});

playFirstSong();