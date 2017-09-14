var hook = require('../nkb-hook.js');

var onPressed = function (pressed) {

    console.log('You pressed ' + pressed.desc + "(" + pressed.code + ")");

};

hook.start().onPressed(onPressed);

