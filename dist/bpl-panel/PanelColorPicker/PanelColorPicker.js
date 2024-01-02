"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _components = require("@wordpress/components");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* eslint-disable no-unused-vars */

var PanelColorPicker = function PanelColorPicker(_ref) {
  var color = _ref.color,
    value = _ref.value,
    renderFunction = _ref.renderFunction,
    label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, label), /*#__PURE__*/_react["default"].createElement(_components.Dropdown, {
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
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.ColorPalette, {
        colors: [{
          name: 'red',
          color: '#f00'
        }, {
          name: 'white',
          color: '#fff'
        }, {
          name: 'blue',
          color: '#00f'
        }],
        value: value,
        onChange: function onChange(value) {
          return renderFunction(value);
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        onClick: onClose
      }));
    }
  }));
};
var _default = exports["default"] = PanelColorPicker;