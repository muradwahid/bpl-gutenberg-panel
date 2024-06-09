"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BButtonGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * BButtonGroup Component
 * 
 * @param {object} props - The props object
 * @param {array} props.options - The options for the button group
 * @param {string} props.label - The label for the button group
 * @param {string} props.value - The value of the button group
 * @param {function} props.onChange - The function to handle changes in the button group value
 * @param {string} props.borderRadius - The border radius for the button group
 * @param {string} props.height - The height of the button group
 * @param {string} props.paddingX - The horizontal padding for the buttons
 * @param {string} props.paddingY - The vertical padding for the buttons
 * @param {string} props.fontSize - The font size for the buttons
 * @param {number} props.fontWeight - The font weight for the buttons
 * @param {string} props.activeBg - The background color for the active button
 * @param {string} props.activeColor - The text color for the active button
 * @param {string} props.inactiveColor - The text color for the inactive buttons
 * @param {string} props.hoverBg - The background color for the buttons on hover
 * @param {string} props.hoverColor - The text color for the buttons on hover
 * @param {object} props.style - The style object for the button group
 * @returns {JSX.Element} React component
 */

var BButtonGroup = exports.BButtonGroup = function BButtonGroup(props) {
  var _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$label = props.label,
    label = _props$label === void 0 ? "Button Group" : _props$label,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$borderRadius = props.borderRadius,
    borderRadius = _props$borderRadius === void 0 ? "30px" : _props$borderRadius,
    height = props.height,
    _props$paddingX = props.paddingX,
    paddingX = _props$paddingX === void 0 ? "8px" : _props$paddingX,
    _props$paddingY = props.paddingY,
    paddingY = _props$paddingY === void 0 ? "4px" : _props$paddingY,
    _props$fontSize = props.fontSize,
    fontSize = _props$fontSize === void 0 ? "12px" : _props$fontSize,
    _props$fontWeight = props.fontWeight,
    fontWeight = _props$fontWeight === void 0 ? 400 : _props$fontWeight,
    activeBg = props.activeBg,
    _props$activeColor = props.activeColor,
    activeColor = _props$activeColor === void 0 ? "#fff" : _props$activeColor,
    _props$inactiveColor = props.inactiveColor,
    inactiveColor = _props$inactiveColor === void 0 ? "#000" : _props$inactiveColor,
    hoverBg = props.hoverBg,
    hoverColor = props.hoverColor,
    style = props.style;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeButton = _useState2[0],
    setActiveButton = _useState2[1];
  var btnOptions = options.length > 0 ? options : [1, 2];
  var btnRef = (0, _react.useRef)(null);
  var bgSlideRef = (0, _react.useRef)(null);
  var uniqId = Math.floor(Math.random() * 99999999);
  (0, _react.useEffect)(function () {
    var activeIndex = activeButton > options.length - 1 ? activeButton - 1 : activeButton;
    var btnWrapper = btnRef.current;
    var bdSlide = bgSlideRef.current;
    if (value) {
      btnOptions.forEach(function (v, i) {
        if (v.value === value) {
          setActiveButton(i);
        }
      });
    }
    var btns = btnWrapper.querySelectorAll(".bpl-button-group-".concat(uniqId));
    var singleBtn = Array.from(btns)[activeIndex];
    // const leftValue = Array.from(btns)[activeButton === 0 ? activeButton : activeButton - 1].getBoundingClientRect().width.toFixed(2)
    var boundingHeight = singleBtn.getBoundingClientRect().height.toFixed(2);
    var boundingWidth = singleBtn.getBoundingClientRect().width.toFixed(2);
    var width = Number(boundingWidth);
    var height = Number(boundingHeight);
    bdSlide.style.width = "".concat(width || singleBtn.clientWidth, "px");
    bdSlide.style.height = "".concat(height || singleBtn.clientHeight, "px");
    // bdSlide.style.left = `${activeButton * leftValue}px`;
    bdSlide.style.left = "".concat(singleBtn.offsetLeft, "px");
  }, [activeButton, options, value]);
  var handleSetValue = function handleSetValue(e, option, i) {
    setActiveButton(i);
    onChange(option.value);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: _objectSpread({
      marginBottom: "10px"
    }, style)
  }, /*#__PURE__*/_react["default"].createElement("style", null, "\n        .bpl-buttonGroupHover-".concat(uniqId, ".bpl-button-group-").concat(uniqId, ":hover{\n          background:").concat(hoverBg, ";\n          color:").concat(hoverColor, ";\n          transition: background 0.3s ease-in-out;\n        }\n      ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    style: {
      fontWeight: 500
    }
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    ref: btnRef,
    style: {
      display: "flex",
      position: "relative",
      border: "1px solid #ccc",
      borderRadius: borderRadius
    }
  }, btnOptions.map(function (option, i) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      style: {
        background: hoverBg ? activeButton === i ? "transparent" : "" : "transparent",
        borderRadius: borderRadius,
        height: height,
        padding: "".concat(paddingY, " ").concat(paddingX),
        fontSize: fontSize,
        zIndex: 20,
        cursor: "pointer",
        fontWeight: fontWeight,
        color: "".concat(activeButton !== i ? inactiveColor : activeColor),
        border: "none"
      },
      key: i,
      onClick: function onClick(e) {
        return handleSetValue(e, option, i);
      },
      className: "".concat(activeButton !== i ? "bpl-buttonGroupHover-".concat(uniqId) : "", " bpl-button-group-").concat(uniqId)
    }, options.length ? option.label : "Button " + (i + 1));
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: bgSlideRef,
    style: {
      background: activeBg || "#4527a4",
      transition: "left 0.2s ease-in-out",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 10,
      borderRadius: borderRadius
    }
  }))));
};
//# sourceMappingURL=BButtonGroup.js.map