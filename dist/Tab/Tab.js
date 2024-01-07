"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Tab = function Tab(_ref) {
  var options = _ref.options,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    value = _ref.value,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 4 : _ref$padding;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n          .includeExclude {\n            display: flex;\n            justify-content: space-between;\n            border: 1px solid #ccc;\n            margin:8px 0px;\n          }\n          .isActive-include {\n            background: #d7d7d7;\n          }\n          .single-includeExclude {\n            display: flex;\n            width: 100%;\n            justify-content: center;\n            transition: background 0.2s ease-in-out;\n            cursor: pointer;\n          }\n          .single-includeExclude p {\n              margin: 0;\n              padding: ".concat(padding, "px 0;\n            }\n          .single-includeExclude-hover:hover {\n            background: #ebebeb;\n          }\n          ")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "includeExclude"
  }, options === null || options === void 0 ? void 0 : options.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      onClick: function onClick() {
        return onChange(option);
      },
      className: "single-includeExclude ".concat(value === option ? 'isActive-include' : 'single-includeExclude-hover')
    }, /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        textTransform: 'capitalize'
      }
    }, option));
  })));
};
var _default = exports["default"] = Tab;