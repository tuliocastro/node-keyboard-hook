var hook = require('../nkbhook.js');

var onPressed = function (pressed) {

    console.log('You pressed ' + pressed.name + "(" + pressed.code + ")");

};

hook.start().onPressed(onPressed);

