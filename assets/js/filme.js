const bannerImage = document.querySelector('.banner-img');
const video = document.createElement('video');

video.src = '../assets/videos/Interestelar.mp4';
video.width = bannerImage.offsetWidth; 
video.height = bannerImage.offsetHeight;
video.controls = true; 
video.style.position = 'absolute'; 
video.style.top = '0'; 
video.style.left = '0'; 
video.style.zIndex = '30'; 
video.style.display = 'none'; 

const movieBanner = document.querySelector('.movie-banner');
movieBanner.style.position = 'relative';
movieBanner.appendChild(video);

bannerImage.addEventListener('mouseenter', () => {
    video.style.display = 'block'; 
    video.play();
});

bannerImage.addEventListener('mouseleave', () => {
    video.pause(); 
    video.currentTime = 0; 
    video.style.display = 'none';
});
