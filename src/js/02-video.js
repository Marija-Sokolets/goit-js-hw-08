import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// Select with the DOM API
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

const onPlay = function(data) {
    // data is an object containing properties specific to that event
};

player.on('play', onPlay);

// Select with jQuery
// If multiple elements are selected, it will use the first element.
const jqueryPlayer = new Vimeo.Player($('iframe'));

// Select with the `<iframe>`’s id
// Assumes that there is an <iframe id="player1"> on the page.
const idPlayer = new Vimeo.Player('player1');