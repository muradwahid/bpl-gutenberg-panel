"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPanel = void 0;
var _react = _interopRequireDefault(require("react"));
require("./tabpanel.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Dashicon = wp.components.Dashicon;
/**
 * TabPanel Component
 * 
 * @param {object} props - The props object
 * @param {string} props.value - The value of the tab panel
 * @param {function} props.onChange - The function to handle changes in the tab panel value
 * @returns {JSX.Element} React component
 */

var TabPanel = exports.TabPanel = function TabPanel(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-panel-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return onChange('content');
    },
    className: "single-tab ".concat(value === 'content' ? 'is-tab-active active-tab-color' : 'deActive-tab-color')
  }, /*#__PURE__*/_react["default"].createElement(Dashicon, {
    icon: "edit"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Content")), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return onChange('style');
    },
    className: "single-tab ".concat(value === 'style' ? 'is-tab-active active-tab-color' : 'deActive-tab-color')
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    style: {
      paddingBottom: '4px',
      fontSize: '20px'
    },
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 512 512",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
  })), /*#__PURE__*/_react["default"].createElement("span", null, "Style"))));
};
//# sourceMappingURL=TabPanel.js.map