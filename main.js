var fs = require("fs");
var path = require("path");
var spawn = require("child_process").spawn;
var Q = require("q");

var JAR_PATH = path.join(__dirname, "java", "dist", "KeyboardHook.jar");

var processHook = null;

function decodeData(arrayBuffer) {

    var decoded = '';

    arrayBuffer.forEach(function (char) {
        decoded += String.fromCharCode(char);
    });

    return decoded;
}

var interface = {

    callbackOnTyped: null,
    callbackOnReleased: null,
    callbackOnPressed: null,

    start: function () {

        if (!fs.existsSync(JAR_PATH)) {
            throw new Error("ERR: Can't find keyboard hook at " + JAR_PATH);
        }

        processHook = spawn("java", ["-jar", JAR_PATH]);

        processHook.stdout.on('data', function (data) {

            if (!data.length) {
                console.log('saiu no response')
                return;
            }

            var decoded = decodeData(data);

            if (!decoded || decoded.charCodeAt(0) != '{') {
                console.log(decoded.charCodeAt(0));
                console.log('saiu no decoded')
                return;
            }

            var response = JSON.parse(decoded);

            switch (response.action) {

                case "RELEASED":

                    if (interface.callbackOnReleased) {
                        interface.callbackOnReleased(response);
                    }

                    break;


                case "PRESSED":

                    if (interface.callbackOnPressed) {
                        interface.callbackOnPressed(response);
                    }

                    break;


                case "TYPED":

                    if (interface.callbackOnTyped) {
                        interface.callbackOnTyped(response);
                    }

                    break;
            }

        });

        processHook.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
        });

        processHook.on('close', function (code) {
            console.log('child process exited with code: ' + code);
        });

        return this;

    },

    stop: function () {
        processHook.kill("SIGINT");
        processHook = null;

        return this;
    },

    onTyped: function (callback) {

        interface.callbackOnTyped = callback;

        return this;
    },

    onReleased: function (callback) {

        interface.callbackOnReleased = callback;

        return this;
    },

    onPressed: function (callback) {

        interface.callbackOnPressed = callback;

        return this;
    }
};

function Module() {

    return interface;

}

module.exports = Module();