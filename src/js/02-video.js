import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-carrent-time', JSON.stringify(data.seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

const carrentTime = localStorage.getItem('videoplayer-carrent-time');

player.setCurrentTime(carrentTime);
