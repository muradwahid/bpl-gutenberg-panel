"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TinyEditorStyle = function TinyEditorStyle() {
  return /*#__PURE__*/_react["default"].createElement("style", null, ".custom-tinymce-button {\n    background: #fff;\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    padding: 2px 8px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 4px;\n    color: #3c3c3c;\n    font-weight: 500;\n    cursor: pointer;\n    transition: background 0.1s linear;\n    margin-left: -1.5px;\n    margin-bottom: 4px;\n}\n.custom-tinymce-button:hover{\n  background: #f1f1f1;\n}\n");
};
var _default = exports["default"] = TinyEditorStyle;