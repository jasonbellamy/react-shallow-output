'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

/**
 * Renders and returns the output of a shallow react component
 *
 * @param {string|React} component string or React component
 * @param {object} props component props
 * @param {array} children component children
 * @return {object} Object containing the shallow rendered components output.
 */
var shallowOutput = function shallowOutput(component, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var renderer = _reactAddonsTestUtils2['default'].createRenderer();
  renderer.render(_react2['default'].createElement(component, props, children));
  return renderer.getRenderOutput();
};

exports['default'] = shallowOutput;
module.exports = exports['default'];