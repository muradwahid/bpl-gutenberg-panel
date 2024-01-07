"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _hi = require("react-icons/hi2");
var _io = require("react-icons/io");
var _PanelRepeaterStyle = _interopRequireDefault(require("./PanelRepeaterStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PanelRepeater = function PanelRepeater(_ref) {
  var children = _ref.children,
    title = _ref.title,
    _ref$length = _ref.length,
    length = _ref$length === void 0 ? 2 : _ref$length,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$toggle = _ref.toggle,
    toggle = _ref$toggle === void 0 ? false : _ref$toggle,
    _ref$copy = _ref.copy,
    copy = _ref$copy === void 0 ? true : _ref$copy,
    _ref$delete = _ref["delete"],
    del = _ref$delete === void 0 ? true : _ref$delete,
    _ref$index = _ref.index,
    index = _ref$index === void 0 ? null : _ref$index,
    handleDelete = _ref.handleDelete,
    handleCopy = _ref.handleCopy;
  var _useState = (0, _react.useState)(toggle),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  (0, _react.useEffect)(function () {
    onChange(open);
  }, [open, toggle]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_PanelRepeaterStyle["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-repeater-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-repeater-header-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    className: "panel-repeater-header-title"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "panel-repeater-icon-group"
  }, copy && /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleCopy ? function () {
      return handleCopy(index);
    } : null,
    className: "panel-repeater-icon"
  }, /*#__PURE__*/_react["default"].createElement(_io.IoMdCopy, null)), del && length > 1 && /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleDelete ? function () {
      return handleDelete(index);
    } : null,
    className: "panel-repeater-icon"
  }, /*#__PURE__*/_react["default"].createElement(_hi.HiMiniXMark, null)))), open && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: '10px',
      border: '1px solid #ccc',
      borderTop: 'none'
    }
  }, children)));
};
var _default = exports["default"] = PanelRepeater;