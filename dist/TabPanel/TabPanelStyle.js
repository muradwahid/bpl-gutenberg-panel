"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TabPanelStyle = function TabPanelStyle() {
  return /*#__PURE__*/_react["default"].createElement("style", null, ".tab-panel-container {\n  display: flex;\n}\n\n.tab-panel-container .single-tab {\n  display: flex;\n  flex-direction: column;\n  row-gap: 2px;\n  align-items: center;\n  padding: 8px 0;\n  transition: background-color 0.2s ease-in-out;\n  cursor: pointer;\n  width: 100%;\n}\n.tab-panel-container .single-tab .dashicon {\n  font-size: 20px;\n}\n.tab-panel-container .single-tab:hover {\n  background-color: #f1f2f3;\n}\n.tab-panel-container .is-tab-active {\n  border-bottom: 3px solid black;\n}\n.tab-panel-container .deActive-tab-color {\n  color: #515962;\n}\n.tab-panel-container .active-tab-color {\n  color: #0c0d0e;\n}\n");
};
var _default = exports["default"] = TabPanelStyle;