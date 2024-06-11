"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BUnitControl = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./unitControl.css");
var _excluded = ["label", "units", "className", "style", "value", "onChange", "labelPosition"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var BUnitControl = exports.BUnitControl = function BUnitControl(props) {
  var label = props.label,
    units = props.units,
    className = props.className,
    style = props.style,
    _props$value = props.value,
    value = _props$value === void 0 ? "0px" : _props$value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$labelPosition = props.labelPosition,
    labelPosition = _props$labelPosition === void 0 ? "top" : _props$labelPosition,
    rest = _objectWithoutProperties(props, _excluded);
  var unitRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    toggle = _useState2[0],
    setToggle = _useState2[1];
  var defaults = [{
    label: "px",
    value: "px"
  }, {
    label: "%",
    value: "%"
  }, {
    label: "em",
    value: "em"
  }, {
    label: "rem",
    value: "rem"
  }, {
    label: "vw",
    value: "vw"
  }, {
    label: "vh",
    value: "vh"
  }];
  var defaultUnits = units || defaults;
  var number = value.split("").filter(function (_char) {
    return !isNaN(_char) && _char !== "%";
  }).join("");
  var unit = value.split("").filter(function (_char2) {
    return isNaN(_char2) || _char2 === "%";
  }).join("");
  var _useState3 = (0, _react.useState)(number),
    _useState4 = _slicedToArray(_useState3, 2),
    currentNumber = _useState4[0],
    setCurrentNumber = _useState4[1];
  var _useState5 = (0, _react.useState)(unit),
    _useState6 = _slicedToArray(_useState5, 2),
    currentUnit = _useState6[0],
    setCurrentUnit = _useState6[1];
  (0, _react.useEffect)(function () {
    onChange("".concat(currentNumber).concat(currentUnit));
  }, [currentNumber, currentUnit]);
  (0, _react.useEffect)(function () {
    var handle = function handle(e) {
      var _unitRef$current;
      if (!(unitRef !== null && unitRef !== void 0 && (_unitRef$current = unitRef.current) !== null && _unitRef$current !== void 0 && _unitRef$current.contains(e.target))) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return function () {
      document.removeEventListener("mousedown", handle);
    };
  });
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: "unitControlContainer ".concat(labelPosition, " ").concat(className)
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "label-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("label", null, label)), /*#__PURE__*/_react["default"].createElement("div", {
    style: style,
    className: "unitControlSubContainer"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "unitInputBox",
    type: "number",
    value: number,
    onChange: function onChange(e) {
      return setCurrentNumber(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: unitRef,
    className: "unitControlWrapper"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setToggle(!toggle);
    },
    className: "unitControlBtn"
  }, unit), toggle && /*#__PURE__*/_react["default"].createElement("div", {
    className: "unitListWrapper"
  }, defaultUnits === null || defaultUnits === void 0 ? void 0 : defaultUnits.map(function (val, i) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      key: i,
      onClick: function onClick() {
        setCurrentUnit(val.value);
        setToggle(false);
      },
      className: "unitList ".concat(val.value === currentUnit ? "hoverBgColor" : "", " ")
    }, val.label);
  })))));
};
//# sourceMappingURL=BUnitControl.js.map