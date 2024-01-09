"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoxCss = void 0;
var getBoxCss = exports.getBoxCss = function getBoxCss(value) {
  return "".concat(value === null || value === void 0 ? void 0 : value.top, " ").concat(value === null || value === void 0 ? void 0 : value.left, " ").concat(value === null || value === void 0 ? void 0 : value.bottom, " ").concat(value === null || value === void 0 ? void 0 : value.right);
};