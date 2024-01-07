"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PanelShadowStyle = function PanelShadowStyle() {
  return /*#__PURE__*/_react["default"].createElement("style", null, ".panel-shadow-container {\n  border: 1px solid #b9b9b9;\n  padding: 10px;\n  border-radius: 5px;\n  width: 255px;\n}\n.panel-shadow-container .single-shadow-panel {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  font-size: 12px;\n}\n\n.panel-shadow-container\n  .single-shadow-panel\n  .components-base-control.components-input-control.components-number-control {\n  margin: 0px;\n}\n\n.panel-shadow-container .components-base-control.components-toggle-control {\n  margin: 0px;\n}\n");
};
var _default = exports["default"] = PanelShadowStyle;