import vimeoPlayer from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

const TIME_KEY = 'videoplayer-current-time';
const currentTimePlayer = localStorage.getItem(TIME_KEY);

player.on('timeupdate', throttle(onCurrentTime, 1000));


function onCurrentTime (currentTime) {
    localStorage.setItem(TIME_KEY, currentTime.seconds);
}

player.setCurrentTime(currentTimePlayer).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:

            break;
    }
});