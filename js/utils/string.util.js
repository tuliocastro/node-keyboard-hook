if (!String.prototype.isJSON) {

    String.prototype.isJSON = function () {
        try {
            JSON.parse(this);
        } catch (e) {
            return false;
        }
        return true;
    };

}