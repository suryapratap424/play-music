class AudioPlayer {
    constructor(container) {
        this.container = container;
        this.playBtn = container.querySelector(".music-play");
        this.playAudio = container.querySelector("audio");
        this.pauseBtn = container.querySelector(".music-off");
        this.playAudioMix = container.querySelector("audio:nth-of-type(2)");
        this.progressThumb = container.querySelector(".progree-player__thumb");
        this.progressCount = container.querySelector(".progree-player__count");

        this.init();
    }

    init() {
        this.playBtn.addEventListener("click", () => this.togglePlayback());
        this.pauseBtn.addEventListener("click", () => this.togglePlayback());
        this.playAudio.addEventListener("timeupdate", () => this.updateProgress());
    }

    togglePlayback() {
        if (this.playAudio.paused) {
            this.playAudio.play();
            this.playBtn.style.display = "none";
            this.pauseBtn.style.display = "block";
        } else {
            this.playAudio.pause();
            this.pauseBtn.style.display = "none";
            this.playBtn.style.display = "block";
        }
    }

    updateProgress() {
        const currentTime = this.playAudio.currentTime;
        const duration = this.playAudio.duration;
        const progress = (currentTime / duration) * 100;
        this.progressThumb.style.width = `${progress}%`;
        this.progressCount.style.left = `calc(${progress}% - ${this.progressCount.clientWidth / 2}px)`;
        this.progressCount.textContent = this.formatTime(currentTime);
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

// Create instances for each player box
const player1 = new AudioPlayer(document.querySelector(".box:nth-of-type(1)"));
const player2 = new AudioPlayer(document.querySelector(".box:nth-of-type(2)"));
const player3 = new AudioPlayer(document.querySelector(".box:nth-of-type(3)"));
