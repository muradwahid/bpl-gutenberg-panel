"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeUnitControl = void 0;
var _components = require("@wordpress/components");
var _react = _interopRequireWildcard(require("react"));
var _excluded = ["label", "units", "className", "style", "value", "min", "max", "onChange"];
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
/**
 * RangeUnitControl Component
 * 
 * @param {object} props - The props object
 * @param {string} props.label - The label for the range unit control
 * @param {array} props.units - The units for the range unit control
 * @param {string} props.className - The class name for the range unit control
 * @param {object} props.style - The style object for the range unit control
 * @param {string} props.value - The value of the range unit control
 * @param {number} props.min - The minimum value for the range unit control
 * @param {number} props.max - The maximum value for the range unit control
 * @param {function} props.onChange - The function to handle changes in the range unit control value
 * @returns {JSX.Element} React component
 */
var RangeUnitControl = exports.RangeUnitControl = function RangeUnitControl(props) {
  var label = props.label,
    units = props.units,
    className = props.className,
    style = props.style,
    _props$value = props.value,
    value = _props$value === void 0 ? "0px" : _props$value,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 100 : _props$max,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
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
  var defaultUnits = defaults || units;
  var number = parseInt(unit) || 0;
  var unit = "px" || value.slice(number.toString().length);
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
  var id = Math.floor(Math.random() * 999999);
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n        .labelWrapper {\n            display: flex;\n            justify-content: space-between;\n          }\n          .rangeControlWrapper {\n            display: flex;\n          }\n\n          .unitControlBtn {\n            font-size: 8px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            z-index: 9999;\n            border: 1px solid rgb(168, 168, 168);\n            border-left: none;\n            cursor: pointer;\n            font-weight: 600;\n            background-color: #0000;\n            height: 30px;\n            width: 21px;\n            border-radius: 0 2px 2px 0;\n            text-transform: uppercase;\n            margin-left: -1px;\n          }\n\n          .unitControlBtn:focus {\n            border-color: #3858e9;\n            border-left: 1px solid #3858e9;\n          }\n          .unitControlWrapper {\n            position: relative;\n          }\n          .unitListWrapper {\n            position: absolute;\n            right: 0px;\n            z-index: 9999 !important;\n            background: #fff;\n            font-weight: 600;\n            border: 1px solid rgb(168, 168, 168);\n            width: 19px;\n            text-align: center;\n            border-radius: 0 0 2px 2px;\n          }\n          .unitList {\n            margin: 0;\n            cursor: default;\n            font-size: 10px;\n          }\n          .unitList:hover {\n            background-color: #3858e9;\n            color: aliceblue;\n          }\n          .hoverBgColor {\n            background-color: #3858e9;\n            color: aliceblue;\n          }\n\n\n      "), /*#__PURE__*/_react["default"].createElement("div", {
    id: "unitId-".concat(id),
    className: "unitRangeWrapper ".concat(className),
    style: style
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "labelWrapper"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: ""
  }, label)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rangeControlWrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_components.RangeControl, _extends({
    value: currentNumber,
    onChange: function onChange(val) {
      return setCurrentNumber(val);
    }
  }, rest, {
    min: min,
    max: max
  }))), /*#__PURE__*/_react["default"].createElement("div", {
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
  }))))));
};
//# sourceMappingURL=RangeUnitControl.js.map