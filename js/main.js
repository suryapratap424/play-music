function boxesAudioPlayer1() {
    let playBtn1 = document.querySelector("#music-play-1");
    let playAudio1 = document.querySelector("#audio-play-1");
    let pauseBtn1 = document.querySelector("#music-off-1");
    let playAudioMix1 = document.querySelector("#audio-play-mix-1");
    let afterMusic1 = document.querySelector("#boxe-1 #after-btn-1");
    let beforeMusic1 = document.querySelector("#boxe-1 #before-btn-1");
    let progreesThumb1 = document.querySelector("#boxe-1 .progree-player__thumb");
    let progressCount1 = document.querySelector("#boxe-1 .progree-player__count");
    let progressBar1 = document.querySelector("#boxe-1 .progree-player");

    playBtn1.addEventListener("click", () => {
        if (playAudio1.paused) {
            playAudio1.play();
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

    pauseBtn1.addEventListener("click", () => {
        if (!playAudioMix1.paused) {
            playAudioMix1.pause();
            pauseBtn1.style.display = "none"; // Hide the pause button
            playBtn1.style.display = "block"; // Show the play button
        }
    });





    playAudio1.addEventListener("timeupdate", () => {
        const currentTime = playAudio1.currentTime;
        const duration = playAudio1.duration;
        const progress = (currentTime / duration) * 100;

        // Update the width of the progress bar's thumb and count for playAudio1
        progreesThumb1.style.left = `${progress}%`;
        progressCount1.style.width = `${progress}%`;
        console.log(playAudio1.currentTime,playAudioMix1.currentTime);

    });


    playAudioMix1.addEventListener("timeupdate", () => {
        const currentTime = playAudioMix1.currentTime;
        const duration = playAudioMix1.duration;
        const progress = (currentTime / duration) * 100;

        // Update the width of the progress bar's thumb and count for playAudioMix1
        progreesThumb1.style.left = `${progress}%`;
        progressCount1.style.width = `${progress}%`;
        console.log(playAudio1.currentTime,playAudioMix1.currentTime);
    });

    // progress bar seek 
    progressBar1.addEventListener("click", (e) => {
        const progressBarRect = progressBar1.getBoundingClientRect();
        const clickX = e.clientX - progressBarRect.left;
        const progressBarWidth = progressBarRect.width;
        const seekTime1 = (clickX / progressBarWidth) * playAudio1.duration;
    
        // if (!playAudio1.paused) {
            playAudio1.currentTime = seekTime1;
        // } else {
            playAudioMix1.currentTime = seekTime1;
        // }
    });
    


}

boxesAudioPlayer1();






function boxesAudioPlayer2() {
    let playBtn2 = document.querySelector("#music-play-2");
    let playAudio2 = document.querySelector("#audio-play-2");
    let pauseBtn2 = document.querySelector("#music-off-2");
    let playAudioMix2 = document.querySelector("#audio-play-mix-2");
    let afterMusic2 = document.querySelector("#boxe-2 #after-btn-2");
    let beforeMusic2 = document.querySelector("#boxe-2 #before-btn-2");
    let progreesThumb2 = document.querySelector("#boxe-2 .progree-player__thumb");
    let progressCount2 = document.querySelector("#boxe-2 .progree-player__count");
    let progressBar2 = document.querySelector("#boxe-2 .progree-player");

    playBtn2.addEventListener("click", () => {
        if (playAudio2.paused) {
            playAudio2.play();
            playBtn2.style.display = "none"; // Hide the play button
            pauseBtn2.style.display = "block"; // Show the pause button
        }
    });

    pauseBtn2.addEventListener("click", () => {
        if (!playAudio2.paused) {
            playAudio2.pause();
            pauseBtn2.style.display = "none"; // Hide the pause button
            playBtn2.style.display = "block"; // Show the play button (fix: corrected "display")
        }
    });

    playAudio2.addEventListener("ended", () => {
        playBtn2.style.display = "block"; // Show the play button when audio ends
        pauseBtn2.style.display = "none"; // Hide the pause button when audio ends
    });

    playAudioMix2.addEventListener("ended", () => {
        playBtn2.style.display = "block"; // Show the play button when audio ends
        pauseBtn2.style.display = "none"; // Hide the pause button when audio ends
    });

    beforeMusic2.addEventListener("click", () => {
        if (playAudio2.paused) {
            playAudio2.play();
            playAudioMix2.pause();
            playBtn2.style.display = "none"; // Hide the play button
            pauseBtn2.style.display = "block"; // Show the pause button
        }
    });

    afterMusic2.addEventListener("click", () => {
        if (playAudioMix2.paused) {
            playAudioMix2.play();
            playAudio2.pause();
            playBtn2.style.display = "none"; // Hide the play button
            pauseBtn2.style.display = "block"; // Show the pause button
        }
    });

    pauseBtn2.addEventListener("click", () => {
        if (!playAudioMix2.paused) {
            playAudioMix2.pause();
            pauseBtn2.style.display = "none"; // Hide the pause button
            playBtn2.style.display = "block"; // Show the play button
        }
    });

    playAudio2.addEventListener("timeupdate", () => {
        const currentTime = playAudio2.currentTime;
        const duration = playAudio2.duration;
        const progress2 = (currentTime / duration) * 100;
        console.log(progress2);
        // Update the width of the progress bar's thumb
        progreesThumb2.style.left = `${progress2}%`;
        progressCount2.style.width = `${progress2}%`;

    });



    playAudioMix2.addEventListener("timeupdate", () => {
        const currentTime = playAudioMix2.currentTime;
        const duration = playAudioMix2.duration;
        const progress2 = (currentTime / duration) * 100;
        console.log(progress2);
        // Update the width of the progress bar's thumb
        progreesThumb2.style.left = `${progress2}%`;
        progressCount2.style.width = `${progress2}%`;

    });

    // progress bar seek 
    progressBar2.addEventListener("click", (e) => {
        const progressBarRect = progressBar2.getBoundingClientRect();
        const clickX = e.clientX - progressBarRect.left;
        const progressBarWidth = progressBarRect.width;
        const seekTime1 = (clickX / progressBarWidth) * playAudio2.duration;
    
        if (!playAudio2.paused) {
            playAudio2.currentTime = seekTime1;
        } else {
            playAudioMix2.currentTime = seekTime1;
        }
    });
    

}

boxesAudioPlayer2();




function boxesAudioPlayer3() {
    let playBtn3 = document.querySelector("#music-play-3");
    let playAudio3 = document.querySelector("#audio-play-3");
    let pauseBtn3 = document.querySelector("#music-off-3");
    let playAudioMix3 = document.querySelector("#audio-play-mix-3");
    let afterMusic3 = document.querySelector("#boxe-3 #after-btn-3");
    let beforeMusic3 = document.querySelector("#boxe-3 #before-btn-3");
    let progreesThumb3 = document.querySelector("#boxe-3 .progree-player__thumb");
    let progressCount3 = document.querySelector("#boxe-3 .progree-player__count");
    let progressBar3 = document.querySelector("#boxe-3 .progree-player");


    playBtn3.addEventListener("click", () => {
        if (playAudio3.paused) {
            playAudio3.play();
            playBtn3.style.display = "none"; // Hide the play button
            pauseBtn3.style.display = "block"; // Show the pause button
        }
    });

    pauseBtn3.addEventListener("click", () => {
        if (!playAudio3.paused) {
            playAudio3.pause();
            pauseBtn3.style.display = "none"; // Hide the pause button
            playBtn3.style.display = "block"; // Show the play button
        }
    });

    playAudio3.addEventListener("ended", () => {
        playBtn3.style.display = "block"; // Show the play button when audio ends
        pauseBtn3.style.display = "none"; // Hide the pause button when audio ends
    });

    playAudioMix3.addEventListener("ended", () => {
        playBtn3.style.display = "block"; // Show the play button when audio ends
        pauseBtn3.style.display = "none"; // Hide the pause button when audio ends
    });


    beforeMusic3.addEventListener("click", () => {
        if (playAudio3.paused) {
            playAudio3.play();
            playAudioMix3.pause();
            playBtn3.style.display = "none"; // Hide the play button
            pauseBtn3.style.display = "block"; // Show the pause button
        }
    })

    afterMusic3.addEventListener("click", () => {
        if (playAudioMix3.paused) {
            playAudioMix3.play();
            playAudio3.pause();
            playBtn3.style.display = "none"; // Hide the play button
            pauseBtn3.style.display = "block"; // Show the pause button
        }
    });

    pauseBtn3.addEventListener("click", () => {
        if (!playAudioMix3.paused) {
            playAudioMix3.pause();
            pauseBtn3.style.display = "none"; // Hide the pause button
            playBtn3.style.display = "block"; // Show the play button
        }
    });

    playAudio3.addEventListener("timeupdate", () => {
        const currentTime = playAudio3.currentTime;
        const duration = playAudio3.duration;
        const progress3 = (currentTime / duration) * 100;
        console.log(progress3);
        // Update the width of the progress bar's thumb
        progreesThumb3.style.left = `${progress3}%`;
        progressCount3.style.width = `${progress3}%`;

    });


    playAudioMix3.addEventListener("timeupdate", () => {
        const currentTime = playAudioMix3.currentTime;
        const duration = playAudioMix3.duration;
        const progress3 = (currentTime / duration) * 100;
        console.log(progress3);
        // Update the width of the progress bar's thumb
        progreesThumb3.style.left = `${progress3}%`;
        progressCount3.style.width = `${progress3}%`;

    });

        // progress bar seek 
    progressBar3.addEventListener("click", (e) => {
        const progressBarRect = progressBar3.getBoundingClientRect();
        const clickX = e.clientX - progressBarRect.left;
        const progressBarWidth = progressBarRect.width;
        const seekTime1 = (clickX / progressBarWidth) * playAudio3.duration;
    
        if (!playAudio3.paused) {
            playAudio3.currentTime = seekTime1;
        } else {
            playAudioMix3.currentTime = seekTime1;
        }
    });
    
    
}

boxesAudioPlayer3();
