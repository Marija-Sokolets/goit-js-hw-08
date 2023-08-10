import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const CARRENT_KEY = 'videoplayer-carrent-time';
let carrentTime = localStorage.getItem(CARRENT_KEY) || 0;

const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));

carrentOnPlay(carrentTime);

function onPlay(data) {
carrentTime = data.seconds;
  localStorage.setItem(CARRENT_KEY, data.seconds);
};

function carrentOnPlay(time) {
player.setCurrentTime(time);
};
