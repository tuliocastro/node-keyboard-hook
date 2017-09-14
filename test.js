var hook = require('./main.js');

var onPress = function (pressed) {
    console.log(pressed);
}

var onRelease = function (released) {

    // console.log(released);
}

var onTyped = function (typed) {

    // console.log(typed);
}

var onClose = function () {
    console.log('fechado');
}

var hooker = hook.start().onPressed(onPress).onReleased(onRelease).onTyped(onTyped).onClose(onClose);

setTimeout(function () {

    hooker.stop();

}, 20000);

