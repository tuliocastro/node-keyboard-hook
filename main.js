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

function isJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

var callback = {
    onTyped: null,
    onReleased: null,
    onPressed: null,
    onError: null,
    onClose: null
};

var interface = {

    start: function () {

        if (!fs.existsSync(JAR_PATH)) {
            throw new Error("ERR: Can't find keyboard hook at " + JAR_PATH);
        }

        processHook = spawn("java", ["-jar", JAR_PATH]);

        processHook.stdout.on('data', function (data) {

            if (!data.length) {
                return;
            }

            var decoded = decodeData(data);

            if (!decoded || !isJSON(decoded)) {
                return;
            }

            var response = JSON.parse(decoded);

            switch (response.action) {

                case "RELEASED":

                    if (callback.onReleased) {
                        callback.onReleased(response);
                    }

                    break;


                case "PRESSED":

                    if (callback.onPressed) {
                        callback.onPressed(response);
                    }

                    break;


                case "TYPED":

                    if (callback.onTyped) {
                        callback.onTyped(response);
                    }

                    break;
            }

        });

        processHook.stderr.on('data', function (data) {

            var decoded = decodeData(data);

            if (callback.onError) {
                callback.onError(decoded);
            }

        });

        processHook.on('close', function () {

            if (callback.onClose) {
                callback.onClose();
            }

        });

        return this;

    },

    stop: function () {
        processHook.kill("SIGINT");
        processHook = null;

        return this;
    },

    onTyped: function (fnCallback) {

        callback.onTyped = fnCallback;

        return this;
    },

    onReleased: function (fnCallback) {

        callback.onReleased = fnCallback;

        return this;
    },

    onPressed: function (fnCallback) {

        callback.onPressed = fnCallback;

        return this;
    },

    onError: function (fnCallback) {
        
        callback.onError = fnCallback;

        return this;
    },

    onClose: function (fnCallback) {

        callback.onClose = fnCallback;

        return this;
    }
};

function Module() {

    return interface;

}

module.exports = Module();