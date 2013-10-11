'use strict';

var util = require("util");

module.exports = function (parameters) {
    var commandParameters = createParametersData(parameters).map(createParameterString);

    return commandParameters.join(" ");
};

function createParametersData(parameters) {
    return createParametersDataWithPrefix(parameters, "");
}

function createParametersDataWithPrefix(parameters, prefix) {
    return Object.keys(parameters).reduce(function (currentResult, key) {
        var value = parameters[key];

        if (typeof(value) === "object") {
            var nestedPrefix = prefix + key + ".";

            return currentResult.concat(createParametersDataWithPrefix(value, nestedPrefix));
        }

        return currentResult.concat({
            key: prefix + key,
            value: value
        });
    }, []);
}

function createParameterString(parameterData) {
    return util.format('-%s="%s"', parameterData.key, parameterData.value);
}
