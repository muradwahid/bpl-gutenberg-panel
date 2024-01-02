"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
require("./panelCustomColorControl.css");
var _components = require("@wordpress/components");
var _PanelColorPicker = _interopRequireDefault(require("../PanelColorPicker/PanelColorPicker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable no-unused-vars */
var PanelCustomColorControl = function PanelCustomColorControl(_ref) {
  var value = _ref.value,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'Color' : _ref$label;
  var _useState = (0, _react.useState)('solid'),
    _useState2 = _slicedToArray(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement(_components.Dropdown, {
    className: "my-container-class-name",
    contentClassName: "my-popover-content-classname",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle,
        onClose = _ref2.onClose;
      return /*#__PURE__*/React.createElement("span", {
        style: {
          cursor: 'pointer'
        },
        onClick: onToggle,
        "aria-expanded": isOpen,
        className: "dashicons dashicons-edit"
      });
    },
    renderContent: function renderContent(_ref3) {
      var isOpen = _ref3.isOpen,
        onToggle = _ref3.onToggle,
        onClose = _ref3.onClose;
      return /*#__PURE__*/React.createElement("div", {
        className: "panel-custom-color-control-container"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }, /*#__PURE__*/React.createElement("p", {
        style: {
          marginBottom: '0px'
        }
      }, "Type:"), /*#__PURE__*/React.createElement("div", {
        className: "panel-custom-tab"
      }, /*#__PURE__*/React.createElement("div", {
        className: "custom-single-tab ".concat(tab === 'solid' ? 'active' : ''),
        onClick: function onClick() {
          return setTab('solid');
        }
      }, "Solid"), /*#__PURE__*/React.createElement("div", {
        className: "custom-single-tab ".concat(tab === 'gradient' ? 'active' : ''),
        onClick: function onClick() {
          return setTab('gradient');
        }
      }, "Gradient"))), tab === 'solid' && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, /*#__PURE__*/React.createElement(_PanelColorPicker["default"], {
        color: "#00FFFF",
        value: value,
        label: "Color :",
        renderFunction: function renderFunction(value) {
          return _onChange(value);
        }
      })), tab === 'gradient' && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: '10px'
        }
      }, /*#__PURE__*/React.createElement(_components.GradientPicker, {
        value: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
        onChange: function onChange(value) {
          return _onChange(value);
        },
        gradients: [{
          name: 'Vivid cyan blue to vivid purple',
          gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
          slug: 'vivid-cyan-blue-to-vivid-purple'
        }, {
          name: 'Light green cyan to vivid green cyan',
          gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
          slug: 'light-green-cyan-to-vivid-green-cyan'
        }, {
          name: 'Luminous vivid amber to luminous vivid orange',
          gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
          slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
        }, {
          name: 'Luminous vivid orange to vivid red',
          gradient: 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
          slug: 'luminous-vivid-orange-to-vivid-red'
        }, {
          name: 'Very light gray to cyan bluish gray',
          gradient: 'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
          slug: 'very-light-gray-to-cyan-bluish-gray'
        }, {
          name: 'Cool to warm spectrum',
          gradient: 'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
          slug: 'cool-to-warm-spectrum'
        }]
      })), /*#__PURE__*/React.createElement("div", {
        onClick: onClose
      }));
    }
  }));
};
var _default = exports["default"] = PanelCustomColorControl;