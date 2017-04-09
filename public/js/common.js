require("zepto");

var get = function(name) {
    if (!localStorage[name]) {
        return null;
    } else {
        return JSON.parse(localStorage[name]);
    }

};
var save = function(name, obj) {
    localStorage[name] = JSON.stringify(obj);
};


module.exports.get = get;
module.exports.save = save;
