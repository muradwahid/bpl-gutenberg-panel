"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PanelRepeaterStyle = function PanelRepeaterStyle() {
  return /*#__PURE__*/_react["default"].createElement("style", null, ".panel-repeater-wrapper {\n  margin-bottom: 10px;\n}\n\n.panel-repeater-wrapper .panel-repeater-header-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 37px;\n  border: 1px solid #ccc;\n\n}\n\n.panel-repeater-wrapper .panel-repeater-header-wrapper .panel-repeater-header-title {\n  margin: 0;\n  font-size: 13px;\n  padding-left: 10px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.panel-repeater-wrapper .panel-repeater-header-wrapper .panel-repeater-header-title:hover {\n  background: #ccccccb0;\n}\n\n.panel-repeater-wrapper .panel-repeater-header-wrapper .panel-repeater-icon-group {\n  display: flex;\n  align-items: center;\n  height: inherit;\n}\n\n.panel-repeater-wrapper .panel-repeater-header-wrapper .panel-repeater-icon-group .panel-repeater-icon {\n  border-left: 1px solid #ccc;\n  height: inherit;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n}\n\n.panel-repeater-wrapper .panel-repeater-header-wrapper .panel-repeater-icon-group .panel-repeater-icon:hover {\n  background: #ccccccb0;\n}");
};
var _default = exports["default"] = PanelRepeaterStyle;