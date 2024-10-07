const bannerImage = document.querySelector('.movie-banner');
const video = document.createElement('video');

video.src = '../assets/videos/Interestelar.mp4';
video.width = bannerImage.offsetWidth; 
video.height = bannerImage.offsetHeight;
video.controls = true; 
video.style.position = 'absolute'; 
video.style.inset = '0'
video.style.zIndex = '30'; 
video.style.display = 'none'; 

const movieBanner = document.querySelector('.movie-banner');
movieBanner.style.position = 'relative';
movieBanner.appendChild(video);

bannerImage.addEventListener('click', async () => {
    await video.requestFullscreen()
    video.style.display = 'block';
    await video.play();
});

video.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        video.pause()
        video.style.display = 'none'
    }
});
