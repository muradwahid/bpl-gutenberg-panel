"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PanelAlignStyle = function PanelAlignStyle() {
  return /*#__PURE__*/_react["default"].createElement("style", null, ".single-icon-admin-panel {\n  position: relative;\n  width: 100%;\n  padding: 8px 8px !important;\n  transition: background 0.2 ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.single-icon-admin-panel.isActive {\n  background-color: #d5d8dc;\n}\n\n.single-icon-admin-panel:hover {\n  background: #ebebeb;\n}\n\n.single-icon-admin-panel {\n  border-right: 1px solid #ccc;\n}\n\n.single-icon-admin-panel:last-child {\n  border-right: 0px;\n}\n\n.single-icon-admin-panel.isActive-include {\n  background: #d7d7d7;\n}\n\n.icon-picker-tooltip-container {\n  position: absolute;\n  top: -30px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: none;\n}\n\n.icon-picker-tooltip {\n  position: relative;\n  background: black;\n  border-radius: 3px;\n}\n\n.icon-picker-tooltip>span {\n  color: white;\n}\n\n.icon-picker-tooltip>svg {\n  position: absolute;\n  bottom: -10px;\n  font-size: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.single-icon-admin-panel:hover>.icon-picker-tooltip-container {\n  display: block;\n}");
};
var _default = exports["default"] = PanelAlignStyle;