"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./IncludeExclude.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var IncludeExClude = function IncludeExClude(_ref) {
  var options = _ref.options,
    renderFunction = _ref.renderFunction,
    value = _ref.value,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 4 : _ref$padding;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n          .single-includeExclude p {\n              padding: ".concat(padding, "px 0;\n            }\n          ")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "includeExclude"
  }, options === null || options === void 0 ? void 0 : options.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      onClick: function onClick() {
        return renderFunction(option);
      },
      className: "single-includeExclude ".concat(value === option ? 'isActive-include' : 'single-includeExclude-hover')
    }, /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        textTransform: 'capitalize'
      }
    }, option));
  })));
};
var _default = exports["default"] = IncludeExClude;