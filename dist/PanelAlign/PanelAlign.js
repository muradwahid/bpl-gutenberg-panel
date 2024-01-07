"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _PanelAlignStyle = _interopRequireDefault(require("./PanelAlignStyle"));
var _ai = require("react-icons/ai");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PanelAlign = function PanelAlign(_ref) {
  var label = _ref.label,
    icons = _ref.icons,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    value = _ref.value;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_PanelAlignStyle["default"], null), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0'
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
        return onChange(i + 1);
      },
      className: "single-icon-admin-panel panelAlign ".concat(value === i + 1 ? 'isActive' : '')
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