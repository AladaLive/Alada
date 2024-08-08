document.addEventListener('DOMContentLoaded', () => {
    const videoSource = document.querySelector('video source');
    const videoElement = document.querySelector('video');

    if (!videoSource || !videoElement) {
        console.error("Video source or video element not found");
        return;
    }

    const currentTime = new Date().getHours();

    console.log("Current Time: ", currentTime);

    let videoSrc;

    if (currentTime >= 7 && currentTime < 19) {
        videoSrc = 'video/aladaDay.mp4';
    } else {
        videoSrc = 'video/aladaNight.mp4';
    }

    videoSource.src = videoSrc;
    videoElement.load();
    console.log("Video source set to: ", videoSource.src);
});