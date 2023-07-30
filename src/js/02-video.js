import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

const jqueryPlayer = new Vimeo.Player($('iframe'));

const idPlayer = new Vimeo.Player('player1');