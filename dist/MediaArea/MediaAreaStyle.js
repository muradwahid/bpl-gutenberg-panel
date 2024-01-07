"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MediaAreaStyle = function MediaAreaStyle() {
  return /*#__PURE__*/_react["default"].createElement("style", null, ".custom-media-area-component>.media-area-container {\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  height: 110px;\n  background-image: linear-gradient(45deg,\n      #d5d8dc 25%,\n      transparent 0,\n      transparent 75%,\n      #d5d8dc 0,\n      #d5d8dc),\n    linear-gradient(45deg,\n      #d5d8dc 25%,\n      transparent 0,\n      transparent 75%,\n      #d5d8dc 0,\n      #d5d8dc);\n  background-size: 16px 16px;\n  background-position: 0 0, calc(16px / 2) calc(16px / 2);\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.custom-media-area-component>.media-area-container>.media-bottom {\n  position: absolute;\n  bottom: -40px;\n  left: 0;\n  right: 0;\n  text-align: center;\n  background: #161616;\n  color: white;\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n}\n\n.custom-media-area-component>.media-area-container>.media-delete {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  background: #161616;\n  padding: 3px 6px;\n  display: none;\n  color: white;\n}\n\n.custom-media-area-component>.media-area-container>.media-area-image {\n  object-fit: cover;\n  border: none;\n}\n\n.media-area-container:hover>.media-bottom {\n  bottom: 0;\n}\n\n.media-area-container:hover>.media-delete {\n  display: block;\n}");
};
var _default = exports["default"] = MediaAreaStyle;