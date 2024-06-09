"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BGradient = void 0;
var _components = require("@wordpress/components");
var _react = require("react");
var _BButtonGroup = require("../BButtonGroup/BButtonGroup");
var _immer = require("immer");
var _PanelColorPicker = require("../PanelColorPicker/PanelColorPicker");
require("./bGradientStyle.css");
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
 * BGradient Component
 *
 * @param {object} props - The props object
 * @param {object} props.value - The value of the gradient
 * @param {function} props.onChange - The function to handle changes in the gradient value
 * @returns {JSX.Element} React component
 */

var BGradient = exports.BGradient = function BGradient(props) {
  var value = props.value,
    onChange = props.onChange;
  // const [advGradient, setAdvGradient] = useState({
  //   type: value.type || "linear",
  //   radialType: value.radialType || "ellipse",
  //   colors: value.colors || [
  //     { color: "", position: 0 },
  //     { color: "", position: 0 },
  //   ],
  //   centerPositions: value.centerPositions || { x: 0, y: 0 },
  //   angel: value.angel || 90,
  // });
  var _useState = (0, _react.useState)(value || {
      type: "linear",
      radialType: "ellipse",
      colors: [{
        color: "",
        position: 0
      }, {
        color: "",
        position: 0
      }],
      centerPositions: {
        x: 0,
        y: 0
      },
      angel: 90
    }),
    _useState2 = _slicedToArray(_useState, 2),
    advGradient = _useState2[0],
    setAdvGradient = _useState2[1];
  var type = advGradient.type,
    radialType = advGradient.radialType,
    colors = advGradient.colors,
    centerPositions = advGradient.centerPositions,
    angel = advGradient.angel;
  var updateColorsProperty = function updateColorsProperty(index, t, val) {
    var newColors = (0, _immer.produce)(advGradient.colors, function (draft) {
      draft[index][t] = val;
    });
    setAdvGradient(_objectSpread(_objectSpread({}, advGradient), {}, {
      colors: newColors
    }));
    onChange(_objectSpread(_objectSpread({}, advGradient), {}, {
      colors: newColors
    }));
  };
  var addColor = function addColor() {
    var newColor = (0, _immer.produce)(advGradient.colors, function (draft) {
      draft.push({
        color: "#f00",
        position: 0
      });
    });
    setAdvGradient(_objectSpread(_objectSpread({}, advGradient), {}, {
      colors: newColor
    }));
    onChange(_objectSpread(_objectSpread({}, advGradient), {}, {
      colors: newColor
    }));
  };
  var removeColor = function removeColor(index) {
    var newColor = (0, _immer.produce)(advGradient.colors, function (draft) {
      draft.splice(index, 1);
    });
    setAdvGradient(_objectSpread(_objectSpread({}, advGradient), {}, {
      colors: newColor
    }));
    onChange(_objectSpread(_objectSpread({}, advGradient), {}, {
      colors: newColor
    }));
  };
  (0, _react.useEffect)(function () {
    onChange(advGradient);
  }, [advGradient, value]);
  (0, _react.useEffect)(function () {
    onChange(advGradient);
  }, [advGradient, value]);
  return /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_BButtonGroup.BButtonGroup, {
    label: "Gradient Type",
    value: type,
    onChange: function onChange(val) {
      return setAdvGradient(_objectSpread(_objectSpread({}, advGradient), {}, {
        type: val
      }));
    },
    options: [{
      label: "Linear",
      value: "linear"
    }, {
      label: "Radial",
      value: "radial"
    }]
  }), type === "radial" && /*#__PURE__*/React.createElement(_BButtonGroup.BButtonGroup, {
    label: "Radial Type",
    value: radialType,
    onChange: function onChange(val) {
      return setAdvGradient(_objectSpread(_objectSpread({}, advGradient), {}, {
        radialType: val
      }));
    },
    options: [{
      label: "Ellipse",
      value: "ellipse"
    }, {
      label: "Circle",
      value: "circle"
    }]
  }), /*#__PURE__*/React.createElement(_react.Fragment, null, colors === null || colors === void 0 ? void 0 : colors.map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px"
      },
      key: i
    }, /*#__PURE__*/React.createElement(_PanelColorPicker.PanelColorPicker, {
      value: c.color,
      onChange: function onChange(val) {
        return updateColorsProperty(i, "color", val);
      },
      tooltip: "Color",
      style: {
        marginBottom: "0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "5px"
      },
      className: "advExtraMargin"
    }, /*#__PURE__*/React.createElement(_components.Tooltip, {
      delay: 300,
      text: "Position",
      placement: "top"
    }, /*#__PURE__*/React.createElement(_components.__experimentalNumberControl, {
      value: c.position,
      onChange: function onChange(val) {
        return updateColorsProperty(i, "position", val);
      },
      min: 0,
      max: 100
    })), colors.length > 2 && /*#__PURE__*/React.createElement(_components.Dashicon, {
      style: {
        cursor: "pointer",
        color: "red"
      },
      onClick: function onClick() {
        return removeColor(i);
      },
      icon: "trash"
    })));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      margin: "10px 0"
    }
  }, /*#__PURE__*/React.createElement(_components.Button, {
    text: "Add Color",
    variant: "tertiary",
    style: {
      background: "#4527a4",
      color: "#fff"
    },
    icon: "plus",
    iconPosition: "right",
    onClick: addColor
  })), type === "radial" ? /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "Center X Position",
    value: centerPositions === null || centerPositions === void 0 ? void 0 : centerPositions.x,
    onChange: function onChange(val) {
      return setAdvGradient(_objectSpread(_objectSpread({}, advGradient), {}, {
        centerPositions: _objectSpread(_objectSpread({}, centerPositions), {}, {
          x: val
        })
      }));
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "Center Y Position",
    value: centerPositions === null || centerPositions === void 0 ? void 0 : centerPositions.y,
    onChange: function onChange(val) {
      return setAdvGradient(_objectSpread(_objectSpread({}, advGradient), {}, {
        centerPositions: _objectSpread(_objectSpread({}, centerPositions), {}, {
          y: val
        })
      }));
    },
    min: 0,
    max: 100
  })) : /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "Angle",
    value: angel,
    onChange: function onChange(val) {
      return setAdvGradient(_objectSpread(_objectSpread({}, advGradient), {}, {
        angel: val
      }));
    },
    min: 0,
    max: 360
  })));
};
//# sourceMappingURL=BGradient.js.map