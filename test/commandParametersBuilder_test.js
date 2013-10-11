'use strict';

var buildCommandParameters = require('../src/buildCommandParameters');

exports['returns nothing for empty parameters object'] = function(test) {
    test.equals(buildCommandParameters({}), '');

    test.done();
};

exports['builds command for single parameter'] = function(test) {
    var parameters = {
        key: 'value'
    };
    test.equals(buildCommandParameters(parameters), '-key="value"');

    test.done();
};

exports['builds command for multiple flat parameters'] = function(test) {
    var parameters = {
        keyOne: 'one',
        keyTwo: 2
    };
    test.equals(buildCommandParameters(parameters), '-keyOne="one" -keyTwo="2"');

    test.done();
};


exports['builds command for nested parameters'] = function(test) {
    var parameters = {
        outer: {
            nested: 'value'
        }
    };
    test.equals(buildCommandParameters(parameters), '-outer.nested="value"');

    test.done();
};
