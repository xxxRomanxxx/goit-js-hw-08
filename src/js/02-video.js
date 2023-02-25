import vimeoPlayer from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

player.on('pause', function(currentTime) {
    const videoplayerCurrentTime = currentTime;
    console.log(videoplayerCurrentTime);
});



player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});