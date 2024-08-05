window.addEventListener("DOMContentLoaded", (event) => {
    const video = document.getElementById('video');
    const playButton = document.getElementById('play-button');

    playButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playButton.classList.add('hidden');
        } else {
            video.pause();
            playButton.classList.remove('hidden');
        }
    });

    video.addEventListener('play', () => {
        playButton.classList.add('hidden');
    });

    video.addEventListener('pause', () => {
        playButton.classList.remove('hidden');
    });

    video.addEventListener('ended', () => {
        playButton.classList.remove('hidden');
    });
});

