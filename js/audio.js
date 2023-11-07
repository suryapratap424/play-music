class BoxAudioPlayer {
  constructor(containerId) {
    this.container = document.getElementsByClassName(containerId)[0];
    this.audioPlayers = [];
  }

  addAudio(track1Src, track2Src) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = `<div class="main___heading__box">
        <div class="heading__art">Pop</div>
        <div class="para">Marzena Mudrak - Memory</div>
    </div>
    <div class="before-after-btn">
        <input type="radio" name="PlayerBtn" id="before" checked>
        <label for="before" id="before-btn-1">
            <span>Before</span>
        </label>
        <input type="radio" id="after" name="PlayerBtn">
        <label for="after" id="after-btn-1">
            <span>After</span>
        </label>
    </div>
    <div class="progress-bar">
        <div class="progree-player">
            <div class="progree-player__count"></div>
            <div class="progree-player__thumb"></div>
        </div>
    </div>
    <div class="music-play-btn">
        <audio src="track1.mp3" id="audio-play-1"></audio>
        <audio src="track2.mp3" id="audio-play-mix-1"></audio>
        <div class="play-pause-btn">
            <button type="button" id="music-play-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1"
                stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
        </button>
        <button type="button" id="music-off-1" class="music-off"></button>
        </div>
        
    </div>`;
    this.container.appendChild(div)
  }
  audioPlayer() {
    let playBtn1 = document.querySelector("#music-play-1");
    let playAudio1 = document.querySelector("#audio-play-1");
    let pauseBtn1 = document.querySelector("#music-off-1");
    let playAudioMix1 = document.querySelector("#audio-play-mix-1");
    let afterMusic1 = document.querySelector("#boxe-1 #after-btn-1");
    let beforeMusic1 = document.querySelector("#boxe-1 #before-btn-1");
    let progreesThumb1 = document.querySelector(
      "#boxe-1 .progree-player__thumb"
    );
    let progressCount1 = document.querySelector(
      "#boxe-1 .progree-player__count"
    );
    let progressBar1 = document.querySelector("#boxe-1 .progree-player");

    playBtn1.addEventListener("click", () => {
      if (document.querySelector("#before").checked) {
        playAudio1.play();
        playBtn1.style.display = "none"; // Hide the play button
        pauseBtn1.style.display = "block"; // Show the pause button
      }
      if (document.querySelector("#after").checked) {
        playAudioMix1.play();
        playBtn1.style.display = "none"; // Hide the play button
        pauseBtn1.style.display = "block"; // Show the pause button
      }
    });

    pauseBtn1.addEventListener("click", () => {
      if (!playAudio1.paused) {
        playAudio1.pause();
        pauseBtn1.style.display = "none"; // Hide the pause button
        playBtn1.style.display = "block"; // Show the play button
      }
      if (!playAudioMix1.paused) {
        playAudioMix1.pause();
        pauseBtn1.style.display = "none"; // Hide the pause button
        playBtn1.style.display = "block"; // Show the play button
      }
    });

    playAudio1.addEventListener("ended", () => {
      playBtn1.style.display = "block"; // Show the play button when audio ends
      pauseBtn1.style.display = "none"; // Hide the pause button when audio ends
    });

    playAudioMix1.addEventListener("ended", () => {
      playBtn1.style.display = "block"; // Show the play button when audio ends
      pauseBtn1.style.display = "none"; // Hide the pause button when audio ends
    });

    beforeMusic1.addEventListener("click", () => {
      if (playAudio1.paused) {
        playAudio1.currentTime = playAudioMix1.currentTime;
        playAudio1.play();
        playAudioMix1.pause();
        playBtn1.style.display = "none"; // Hide the play button
        pauseBtn1.style.display = "block"; // Show the pause button
      }
    });

    afterMusic1.addEventListener("click", () => {
      if (playAudioMix1.paused) {
        playAudioMix1.currentTime = playAudio1.currentTime;
        playAudioMix1.play();
        playAudio1.pause();
        playBtn1.style.display = "none"; // Hide the play button
        pauseBtn1.style.display = "block"; // Show the pause button
      }
    });

    // pauseBtn1.addEventListener("click", () => {
    // if (!playAudioMix1.paused) {
    //     playAudioMix1.pause();
    //     pauseBtn1.style.display = "none"; // Hide the pause button
    //     playBtn1.style.display = "block"; // Show the play button
    // }
    // });

    playAudio1.addEventListener("timeupdate", () => {
      const currentTime = playAudio1.currentTime;
      const duration = playAudio1.duration;
      const progress = (currentTime / duration) * 100;

      // Update the width of the progress bar's thumb and count for playAudio1
      progreesThumb1.style.left = `${progress}%`;
      progressCount1.style.width = `${progress}%`;
      console.log(playAudio1.currentTime, playAudioMix1.currentTime);
    });

    playAudioMix1.addEventListener("timeupdate", () => {
      const currentTime = playAudioMix1.currentTime;
      const duration = playAudioMix1.duration;
      const progress = (currentTime / duration) * 100;

      // Update the width of the progress bar's thumb and count for playAudioMix1
      progreesThumb1.style.left = `${progress}%`;
      progressCount1.style.width = `${progress}%`;
      console.log(playAudio1.currentTime, playAudioMix1.currentTime);
    });

    // progress bar seek
    progressBar1.addEventListener("click", (e) => {
      const progressBarRect = progressBar1.getBoundingClientRect();
      const clickX = e.clientX - progressBarRect.left;
      const progressBarWidth = progressBarRect.width;
      const seekTime1 = (clickX / progressBarWidth) * playAudio1.duration;

      playAudio1.currentTime = seekTime1;
      playAudioMix1.currentTime = seekTime1;
    });
  }
}
const boxPlayer = new BoxAudioPlayer("container___main");

// Example: Add audio tracks to the container
boxPlayer.addAudio("track1.mp3", "track2.mp3");
boxPlayer.addAudio("track3.mp3", "track4.mp3");
boxPlayer.addAudio("track3.mp3", "track4.mp3");
boxPlayer.addAudio("track3.mp3", "track4.mp3");
boxPlayer.addAudio("track3.mp3", "track4.mp3");
boxPlayer.addAudio("track3.mp3", "track4.mp3");
boxPlayer.addAudio("track3.mp3", "track4.mp3");
