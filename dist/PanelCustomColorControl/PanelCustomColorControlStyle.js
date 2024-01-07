"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PanelCustomColorControlStyle = function PanelCustomColorControlStyle() {
  return /*#__PURE__*/_react["default"].createElement("style", null, ".panel-custom-color-control-container {\n  border-radius: 5px;\n  width: 250px;\n}\n\n.panel-custom-color-control-container .panel-custom-tab {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.panel-custom-color-control-container .panel-custom-tab .custom-single-tab {\n  padding: 3px 6px;\n  cursor: pointer;\n  border: 1px solid #ccc;\n}\n\n.panel-custom-color-control-container .panel-custom-tab .custom-single-tab:last-child {\n  border-left: none;\n}\n\n.panel-custom-color-control-container .panel-custom-tab .custom-single-tab:hover {\n  background: #ccc;\n}\n\n.panel-custom-color-control-container .panel-custom-tab .active {\n  background: #006ba1;\n  color: #e7e7e7;\n}");
};
var _default = exports["default"] = PanelCustomColorControlStyle;