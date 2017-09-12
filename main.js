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

    //TODO PAssar para um jar controller
    startJar: function () {

        if (!fs.existsSync(JAR_PATH)) {
            throw new Error("ERR: Can't find keyboard hook at " + JAR_PATH);
        }

        processHook = spawn("java", ["-jar", JAR_PATH]);

        processHook.stdout.on('data', function (data) {
            console.log(decodeData(data));
        })

        processHook.stderr.on('data', function (data) {
            // console.log('stderr: ' + data);
        });

        processHook.on('close', function (code) {
            // console.log('child process exited with code: ' + code);
        });

    },

    stopJar: function () {
        processHook.kill("SIGINT");
        processHook = null;
    }
}

function Module() {

    return interface;

}

module.exports = Module();