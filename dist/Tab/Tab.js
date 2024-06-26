"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Tab = exports.Tab = function Tab(props) {
  var options = props.options,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    value = props.value,
    _props$paddingY = props.paddingY,
    paddingY = _props$paddingY === void 0 ? 4 : _props$paddingY,
    _props$paddingX = props.paddingX,
    paddingX = _props$paddingX === void 0 ? 0 : _props$paddingX;
  var id = Math.floor(Math.random() * 99999999);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n          .bplCustomTab {\n            display: flex;\n            justify-content: space-between;\n            border: 1px solid #ccc;\n            margin:8px 0px;\n          }\n          .isActive-include {\n            background: #d7d7d7;\n          }\n          .single-bplCustomTab {\n            display: flex;\n            width: 100%;\n            justify-content: center;\n            transition: background 0.2s ease-in-out;\n            cursor: pointer;\n            white-space:nowrap;\n            border-right: 1px solid #d7d7d7;\n          }\n          .single-bplCustomTab:last-child{\n            border-right:0px\n          }\n          .dynamic-".concat(id, ".single-bplCustomTab p {\n              margin: 0;\n              padding: ").concat(paddingY, "px ").concat(paddingX, "px;\n            }\n          .single-bplCustomTab-hover:hover {\n            background: #ebebeb;\n          }\n          ")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bplCustomTab"
  }, options === null || options === void 0 ? void 0 : options.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      onClick: function onClick() {
        return onChange(option.replace(/\s/g, "").toLowerCase());
      },
      className: "dynamic-".concat(id, " single-bplCustomTab ").concat(value === option.replace(/\s/g, "").toLowerCase() ? 'isActive-include' : 'single-bplCustomTab-hover')
    }, /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        textTransform: 'capitalize'
      }
    }, option));
  })));
};
//# sourceMappingURL=Tab.js.map