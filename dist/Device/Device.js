"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _deviceStyle = _interopRequireDefault(require("./deviceStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Device = function Device(_ref) {
  var _ref$device = _ref.device,
    device = _ref$device === void 0 ? 'desktop' : _ref$device,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    style = _ref.style,
    className = _ref.className;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var deviceValue = [{
    value: 'desktop',
    icon: 'dashicons-desktop'
  }, {
    value: 'tablet',
    icon: 'dashicons-tablet'
  }, {
    value: 'mobile',
    icon: 'dashicons-smartphone'
  }];
  return /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_deviceStyle["default"], null), /*#__PURE__*/React.createElement("div", {
    style: style,
    className: className
  }, !show && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShow(true);
    },
    className: "single-device"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dashicons dashicons-".concat(device === 'desktop' ? 'desktop' : device === 'tablet' ? 'tablet' : 'smartphone')
  }))), show && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, deviceValue.map(function (_ref2, i) {
    var value = _ref2.value,
      icon = _ref2.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        setShow(false);
        onChange(value);
      },
      className: "single-device"
    }, /*#__PURE__*/React.createElement("span", {
      className: "dashicons ".concat(icon)
    }));
  }))));
};
var _default = exports["default"] = Device;