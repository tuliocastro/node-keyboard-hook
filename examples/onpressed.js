var hook = require('../nkb-hook.js');

var onPressed = function (pressed) {

    console.log(pressed);
    console.log('You pressed the key with code ' + pressed.code);

};

hook.start().onPressed(onPressed);

