"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ai = require("react-icons/ai");
var _PanelAlignStyle = _interopRequireDefault(require("./PanelAlignStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PanelAlign = function PanelAlign(_ref) {
  var label = _ref.label,
    icons = _ref.icons,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    value = _ref.value,
    style = _ref.style,
    _ref$labelPosition = _ref.labelPosition,
    labelPosition = _ref$labelPosition === void 0 ? 'left' : _ref$labelPosition;
  var labelAlign = labelPosition == 'left' || labelPosition == 'right';
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement(_PanelAlignStyle["default"], null), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: "".concat(labelAlign ? 'center' : 'normal'),
      flexDirection: "".concat(labelPosition === 'left' ? 'row' : labelPosition == 'right' ? 'row-reverse' : labelPosition === 'top' ? 'column' : 'column-reverse')
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "".concat(labelAlign ? '0' : '8px 0'),
      fontSize: '14px',
      fontWeight: 400
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      border: '1px solid #ccc'
    }
  }, icons && icons.map(function (icon, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return onChange(icon.label.toLowerCase());
      },
      className: "single-icon-admin-panel panelAlign ".concat(value === icon.label.toLowerCase() ? 'isActive' : '')
    }, icon.value, /*#__PURE__*/React.createElement("div", {
      className: "icon-picker-tooltip-container"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '2px 6px'
      },
      className: "icon-picker-tooltip"
    }, /*#__PURE__*/React.createElement("span", null, icon.label), /*#__PURE__*/React.createElement(_ai.AiOutlineCaretDown, null))));
  }))));
};
var _default = exports["default"] = PanelAlign;