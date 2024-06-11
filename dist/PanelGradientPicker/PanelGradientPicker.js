"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelGradientPicker = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable no-unused-vars */

var _wp$components = wp.components,
  Dropdown = _wp$components.Dropdown,
  GradientPicker = _wp$components.GradientPicker;
var PanelGradientPicker = exports.PanelGradientPicker = function PanelGradientPicker(_ref) {
  var value = _ref.value,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", null, label)), /*#__PURE__*/_react["default"].createElement(Dropdown, {
    className: "my-container-class-name",
    contentClassName: "my-popover-content-classname",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
        onToggle = _ref2.onToggle,
        onClose = _ref2.onClose;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: '30px',
          width: '30px',
          borderRadius: '50%',
          background: "".concat(value),
          cursor: 'pointer',
          border: '1px solid #ccc'
        },
        onClick: onToggle,
        "aria-expanded": isOpen
      });
    },
    renderContent: function renderContent(_ref3) {
      var isOpen = _ref3.isOpen,
        onToggle = _ref3.onToggle,
        onClose = _ref3.onClose;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          marginTop: '10px'
        }
      }, /*#__PURE__*/_react["default"].createElement(GradientPicker, {
        value: '#f00',
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
      }), /*#__PURE__*/_react["default"].createElement("div", {
        onClick: onClose
      }));
    }
  }));
};
//# sourceMappingURL=PanelGradientPicker.js.map