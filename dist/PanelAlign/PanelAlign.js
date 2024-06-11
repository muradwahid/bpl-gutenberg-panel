"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelAlign = void 0;
require("./panelAlign.css");
var PanelAlign = exports.PanelAlign = function PanelAlign(props) {
  var label = props.label,
    options = props.options,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    value = props.value,
    style = props.style,
    _props$labelPosition = props.labelPosition,
    labelPosition = _props$labelPosition === void 0 ? 'left' : _props$labelPosition,
    className = props.className;
  var labelAlign = labelPosition == 'left' || labelPosition == 'right';
  return /*#__PURE__*/React.createElement("div", {
    style: style,
    className: className
  }, /*#__PURE__*/React.createElement("div", {
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
  }, options && options.map(function (icon, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return onChange(icon.label.toLowerCase());
      },
      className: "single-icon-admin-panel panelAlign ".concat(value === icon.label.toLowerCase() ? 'isActive' : '')
    }, icon.icon, /*#__PURE__*/React.createElement("div", {
      className: "icon-picker-tooltip-container"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '2px 6px'
      },
      className: "icon-picker-tooltip"
    }, /*#__PURE__*/React.createElement("span", null, icon.label), /*#__PURE__*/React.createElement("svg", {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 1024 1024",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
    })))));
  }))));
};
//# sourceMappingURL=PanelAlign.js.map