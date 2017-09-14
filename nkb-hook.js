require('./js/utils/import');
var jar = require('./js/jar.processor');

var callback = {
    onTyped: null,
    onReleased: null,
    onPressed: null,
    onError: null,
    onClose: null
};

var interface = {

    start: function () {

        var onData = function (data) {

            if (!data.length) {
                return;
            }

            if (!data || !data.isJSON()) {
                return;
            }

            var response = JSON.parse(data);

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

        };

        jar.start(onData, callback.onError, callback.onClose);

        return this;

    },

    stop: function () {

        jar.stop();

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