function stopAllexcept(main) {
  Array.from(document.getElementsByClassName("track")).forEach((e) => {
    if(e!=main)
    e.pause();
  });
  Array.from(document.getElementsByClassName("music-off")).forEach((e) => {
      e.style.display = "none";
  });
  Array.from(document.getElementsByClassName("music-play")).forEach((e) => {
      e.style.display = "block";
  });
}
function audioPlayer(n) {
  let playBtn = document.querySelector(`#music-play-${n}`);
  let playAudio = document.querySelector(`#audio-play-${n}`);
  let pauseBtn = document.querySelector(`#music-off-${n}`);
  let playAudioMix = document.querySelector(`#audio-play-mix-${n}`);
  let afterMusic = document.querySelector(`#boxe-${n} #after-btn-${n}`);
  let beforeMusic = document.querySelector(`#boxe-${n} #before-btn-${n}`);
  let progreesThumb = document.querySelector(
    `#boxe-${n} .progree-player__thumb`
  );
  let progressCount = document.querySelector(
    `#boxe-${n} .progree-player__count`
  );
  let progressBar = document.querySelector(`#boxe-${n} .progree-player`);
  playBtn.addEventListener("click", () => {
    if (document.querySelector(`#before-${n}`).checked) {
      playAudio.play();
      stopAllexcept(playAudio);
      playBtn.style.display = "none"; // Hide the play button
      pauseBtn.style.display = "block"; // Show the pause button
    }
    if (document.querySelector(`#after-${n}`).checked) {
      playAudioMix.play();
      stopAllexcept(playAudioMix);
      playBtn.style.display = "none"; // Hide the play button
      pauseBtn.style.display = "block"; // Show the pause button
    }
  });

  pauseBtn.addEventListener("click", () => {
    stopAllexcept()
    if (!playAudio.paused) {
      playAudio.pause();
      pauseBtn.style.display = "none"; // Hide the pause button
      playBtn.style.display = "block"; // Show the play button
    }
    if (!playAudioMix.paused) {
      playAudioMix.pause();
      pauseBtn.style.display = "none"; // Hide the pause button
      playBtn.style.display = "block"; // Show the play button
    }
  });

  playAudio.addEventListener("ended", () => {
    playBtn.style.display = "block"; // Show the play button when audio ends
    pauseBtn.style.display = "none"; // Hide the pause button when audio ends
  });

  playAudioMix.addEventListener("ended", () => {
    playBtn.style.display = "block"; // Show the play button when audio ends
    pauseBtn.style.display = "none"; // Hide the pause button when audio ends
  });

  beforeMusic.addEventListener("click", () => {
    if (playAudio.paused) {
      playAudio.currentTime = playAudioMix.currentTime;
      playAudio.play();
      stopAllexcept(playAudio);
      playAudioMix.pause();
      playBtn.style.display = "none"; // Hide the play button
      pauseBtn.style.display = "block"; // Show the pause button
    }
  });

  afterMusic.addEventListener("click", () => {
    if (playAudioMix.paused) {
      playAudioMix.currentTime = playAudio.currentTime;
      playAudioMix.play();
      stopAllexcept(playAudioMix);
      playAudio.pause();
      playBtn.style.display = "none"; // Hide the play button
      pauseBtn.style.display = "block"; // Show the pause button
    }
  });

  playAudio.addEventListener("timeupdate", () => {
    const currentTime = playAudio.currentTime;
    const duration = playAudio.duration;
    const progress = (currentTime / duration) * 100;

    // Update the width of the progress bar's thumb and count for playAudio
    progreesThumb.style.left = `${progress}%`;
    progressCount.style.width = `${progress}%`;
    console.log(playAudio.currentTime, playAudioMix.currentTime);
  });

  playAudioMix.addEventListener("timeupdate", () => {
    const currentTime = playAudioMix.currentTime;
    const duration = playAudioMix.duration;
    const progress = (currentTime / duration) * 100;

    // Update the width of the progress bar's thumb and count for playAudioMix
    progreesThumb.style.left = `${progress}%`;
    progressCount.style.width = `${progress}%`;
    console.log(playAudio.currentTime, playAudioMix.currentTime);
  });

  // progress bar seek
  progressBar.addEventListener("click", (e) => {

    const progressBarRect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - progressBarRect.left;
    const progressBarWidth = progressBarRect.width;
    const seekTime = (clickX / progressBarWidth) * playAudio.duration;

    playAudio.currentTime = seekTime;
    playAudioMix.currentTime = seekTime;
  });
}
class BoxAudioPlayer {
  constructor(containerId) {
    this.container = document.getElementsByClassName(containerId)[0];
    this.boxes = 0;
  }

  addAudio(track1Src, track2Src,heading,subtitle) {
    let n = ++this.boxes;
    let div = document.createElement("div");
    div.classList.add("box");
    div.id = `boxe-${n}`;
    let color = "#ffd601";
    let bg = "#615203";
    // if (n % 3 == 2) {
    //   color = "#9EAEF0";
    //   bg = "#9EAEF07d";
    // }
    // if (n % 3 == 0) {
    //   color = "#FF6666";
    //   bg = "#FF66667d";
    // }
    div.innerHTML = `
    <style>
      #before-${n}:checked+label{
        background:${color};
        color:black;
      }
      #after-${n}:checked+label{
        background:${color};
        color:black;
      }
      #music-off-${n}:after{
        border:2px solid ${color}
      }
    </style>
    <div class="main___heading__box">
        <div class="heading__art">${heading}</div>
        <div class="para">${subtitle}</div>
    </div>
    <div class="before-after-btn" style="border:2px solid ${color}">
        <input type="radio" name="PlayerBtn-${n}" id="before-${n}" checked>
        <label onmousedown="return false" onselectstart="return false" for="before-${n}" id="before-btn-${n}">
            <span>Before</span>
        </label>
        <input type="radio" id="after-${n}" name="PlayerBtn-${n}">
        <label onmousedown="return false" onselectstart="return false" for="after-${n}" id="after-btn-${n}">
            <span>After</span>
        </label>
    </div>
    <div class="progress-bar" style="border:2px solid ${color}">
        <div class="progree-player" style="background:${bg};">
            <div class="progree-player__count" style="background:${color}"></div>
            <div class="progree-player__thumb" style="background:${color}"></div>
        </div>
    </div>
    <div class="music-play-btn">
        <audio src="${track1Src}" class="track" id="audio-play-${n}"></audio>
        <audio src="${track2Src}" class="track" id="audio-play-mix-${n}"></audio>
        <div class="play-pause-btn">
            <button type="button" id="music-play-${n}" class="music-play">
            <svg style="stroke:${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1"
                stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
        </button>
        <button style="border:2px solid ${color}" type="button" id="music-off-${n}" class="music-off"></button>
        </div>
        
    </div>`;
    this.container.appendChild(div);
    audioPlayer(n);
  }
}
function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}