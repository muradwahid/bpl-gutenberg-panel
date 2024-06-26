"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelSingleShadow = void 0;
var _react = require("react");
var _PanelColorPicker = _interopRequireDefault(require("../PanelColorPicker/PanelColorPicker.js"));
require("./panelSingleShadow.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable no-unused-vars */
var _wp$components = wp.components,
  Button = _wp$components.Button,
  Dropdown = _wp$components.Dropdown,
  ToggleControl = _wp$components.ToggleControl,
  UnitControl = _wp$components.__experimentalUnitControl;
var PanelSingleShadow = exports.PanelSingleShadow = function PanelSingleShadow(props) {
  var value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    label = props.label;
  var shadow = value || '0px 0px 0px 0px #000000 inset';
  var split = shadow.split(' ');
  var arr = Array.from(split);
  var _useState = (0, _react.useState)(arr[4] === 'inset' ? true : false),
    _useState2 = _slicedToArray(_useState, 2),
    isInset = _useState2[0],
    setIsInset = _useState2[1];
  var _useState3 = (0, _react.useState)({
      x: arr[0] || '0px',
      y: arr[1] || '0px',
      blur: arr[2] || '0px',
      spread: arr[3] || '0px',
      color: arr[4] || '#000000'
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    newArr = _useState4[0],
    setNewArr = _useState4[1];
  (0, _react.useEffect)(function () {
    onChange("".concat(newArr.x, " ").concat(newArr.y, " ").concat(newArr.blur, " ").concat(newArr.spread, " ").concat(newArr.color, " ").concat(isInset ? 'inset' : ''));
  }, [newArr, isInset]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: '5px',
      margin: '10px 0'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement(Dropdown, {
    className: "my-container-class-name",
    contentClassName: "my-popover-content-classname",
    renderToggle: function renderToggle(_ref) {
      var isOpen = _ref.isOpen,
        onToggle = _ref.onToggle,
        onClose = _ref.onClose;
      return /*#__PURE__*/React.createElement(Button, {
        icon: "edit",
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: function renderContent(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle,
        onClose = _ref2.onClose;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "panel-shadow-container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "single-shadow-panel"
      }, /*#__PURE__*/React.createElement("span", null, "HORIZONTAL OFFSET:"), /*#__PURE__*/React.createElement(UnitControl, {
        value: arr[0],
        units: ['px', 'em', 'rem'],
        style: {
          width: '110px'
        },
        onChange: function onChange(val) {
          return setNewArr(_objectSpread(_objectSpread({}, newArr), {}, {
            x: val
          }));
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "single-shadow-panel"
      }, /*#__PURE__*/React.createElement("span", null, "VERTICAL OFFSET:"), /*#__PURE__*/React.createElement(UnitControl, {
        value: arr[1],
        units: ['px', 'em', 'rem'],
        style: {
          width: '110px'
        },
        onChange: function onChange(val) {
          return setNewArr(_objectSpread(_objectSpread({}, newArr), {}, {
            y: val
          }));
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "single-shadow-panel"
      }, /*#__PURE__*/React.createElement("span", null, "BLUR:"), /*#__PURE__*/React.createElement(UnitControl, {
        value: arr[2],
        units: ['px', 'em', 'rem'],
        style: {
          width: '110px'
        },
        onChange: function onChange(val) {
          return setNewArr(_objectSpread(_objectSpread({}, newArr), {}, {
            blur: val
          }));
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "single-shadow-panel"
      }, /*#__PURE__*/React.createElement("span", null, "SPREAD:"), /*#__PURE__*/React.createElement(UnitControl, {
        value: arr[3],
        units: ['px', 'em', 'rem'],
        style: {
          width: '110px'
        },
        onChange: function onChange(val) {
          return setNewArr(_objectSpread(_objectSpread({}, newArr), {}, {
            spread: val
          }));
        }
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_PanelColorPicker["default"], {
        color: '#fff',
        label: "Color:",
        value: newArr.color,
        onChange: function onChange(val) {
          return setNewArr(_objectSpread(_objectSpread({}, newArr), {}, {
            color: val
          }));
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }
      }, /*#__PURE__*/React.createElement(ToggleControl, {
        checked: isInset,
        onChange: function onChange(val) {
          return setIsInset(val);
        }
      }), /*#__PURE__*/React.createElement("span", null, "Shadow Inset?"))), /*#__PURE__*/React.createElement("div", {
        onClick: onClose
      }));
    }
  })));
};
//# sourceMappingURL=PanelSingleShadow.js.map