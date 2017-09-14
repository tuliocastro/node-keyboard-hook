var fs = require("fs");
var path = require("path");
var spawn = require("child_process").spawn;

var JAR_PATH = path.join(__dirname, "../java", "dist", "KeyboardHook.jar");

var processInstance = null;

var interface = {

    start: function (onData, onError, onClose) {

        if (!fs.existsSync(JAR_PATH)) {
            throw new Error("ERR: Can't find Keyboard JAR hook at " + JAR_PATH);
        }

        processInstance = spawn("java", ["-jar", JAR_PATH]);

        processInstance.stdout.on('data', function (data) {

            if (onData) onData(data.toString());

        });
        processInstance.stderr.on('data', function (data) {

            if (onError) onError(data.toString());

        });

        processInstance.on('close', function () {

            if (onClose) onClose();

        });

        return this;
    },

    stop: function () {

        processInstance.kill("SIGINT");
        processInstance = null;

        return this;

    }

};

module.exports = interface;