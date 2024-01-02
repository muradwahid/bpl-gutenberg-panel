"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _components = require("@wordpress/components");
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa6");
require("./tabpanel.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TabPanel = function TabPanel(_ref) {
  var tab = _ref.tab,
    setTab = _ref.setTab;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "tab-panel-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return setTab('content');
    },
    className: "single-tab ".concat(tab === 'content' ? 'is-tab-active active-tab-color' : 'deActive-tab-color')
  }, /*#__PURE__*/_react["default"].createElement(_components.Dashicon, {
    icon: "edit"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Content")), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return setTab('style');
    },
    className: "single-tab ".concat(tab === 'style' ? 'is-tab-active active-tab-color' : 'deActive-tab-color')
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaCircleHalfStroke, {
    style: {
      paddingBottom: '4px',
      fontSize: '20px'
    }
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Style")));
};
var _default = exports["default"] = TabPanel;