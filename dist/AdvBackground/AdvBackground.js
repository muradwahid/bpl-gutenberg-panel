"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvBackground = void 0;
var _components = require("@wordpress/components");
var _compose = require("@wordpress/compose");
var _data = require("@wordpress/data");
var _immer = require("immer");
var _react = require("react");
var _BGradient = require("../BGradient/BGradient");
var _Device = require("../Device/Device");
var _Label = _interopRequireDefault(require("../Label/Label"));
var _MediaArea = require("../MediaArea/MediaArea");
var _PanelCustomColorControl = require("../PanelCustomColorControl/PanelCustomColorControl");
var _Tab = require("../Tab/Tab");
var _options = require("../utils/options");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
 * AdvBackground Component
 * 
 * @param {object} props - The props object
 * @param {string} props.name - The name of the background
 * @param {object} props.value - The value of the background
 * @param {function} props.onChange - The function to handle changes in the background value
 * @param {string} props.device - The device type (e.g., "desktop", "tablet", "mobile")
 * @returns {JSX.Element} React component
 */

var AdvBackground = exports.AdvBackground = (0, _compose.compose)((0, _data.withSelect)(function (select) {
  var _experimentalGetPrev;
  var _select = select("core/edit-post"),
    __experimentalGetPreviewDeviceType = _select.__experimentalGetPreviewDeviceType;
  return {
    device: (_experimentalGetPrev = __experimentalGetPreviewDeviceType()) === null || _experimentalGetPrev === void 0 ? void 0 : _experimentalGetPrev.toLowerCase()
  };
}))(function (props) {
  var _props$name = props.name,
    name = _props$name === void 0 ? "Background" : _props$name,
    value = props.value,
    _props$onChange = props.onChange,
    onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
    _props$device = props.device,
    device = _props$device === void 0 ? "desktop" : _props$device;
  var _useState = (0, _react.useState)(value || {
      hoverType: "normal"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    bgValue = _useState2[0],
    setBgValue = _useState2[1];
  var _ref = bgValue[bgValue.hoverType] || {},
    transition = _ref.transition;
  var updateBG = function updateBG(property, value) {
    var childP = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var newBG = (0, _immer.produce)(bgValue, function (draft) {
      if (null !== childP) {
        draft[bgValue.hoverType][property][childP] = value;
      } else {
        draft[bgValue.hoverType][property] = value;
      }
    });
    setBgValue(newBG);
    onChange(newBG);
  };
  var updateHb = function updateHb(type, value) {
    var newHb = (0, _immer.produce)(bgValue, function (draft) {
      draft[type] = value;
    });
    setBgValue(newHb);
    onChange(newHb);
  };
  (0, _react.useEffect)(function () {
    onChange(bgValue);
  }, [bgValue]);
  return /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_Tab.Tab, {
    options: ["Normal", "Hover"],
    value: bgValue.hoverType,
    onChange: function onChange(val) {
      return updateHb("hoverType", val);
    }
  }), bgValue.hoverType === "hover" && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.RangeControl, {
    label: "".concat(name, " Transition"),
    min: 0,
    max: 5,
    step: 0.05,
    value: transition,
    onChange: function onChange(val) {
      return updateBG("transition", val);
    }
  })), /*#__PURE__*/React.createElement(Background, {
    name: name,
    value: bgValue.hover,
    onChange: function onChange(val) {
      return setBgValue(_objectSpread(_objectSpread({}, bgValue), {}, {
        hover: val
      }));
    },
    device: device
  })), bgValue.hoverType === "normal" && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(Background, {
    name: name,
    value: bgValue.normal,
    onChange: function onChange(val) {
      return setBgValue(_objectSpread(_objectSpread({}, bgValue), {}, {
        normal: val
      }));
    },
    device: device
  })));
});
var Background = function Background(_ref2) {
  var name = _ref2.name,
    value = _ref2.value,
    _onChange = _ref2.onChange,
    device = _ref2.device;
  var _useState3 = (0, _react.useState)(value || {
      type: "color",
      color: "#0000",
      gradient: _options.advGradientOptions,
      img: {
        url: "",
        desktop: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px"
        },
        tablet: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px"
        },
        mobile: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px"
        }
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    bgValue = _useState4[0],
    setBgValue = _useState4[1];
  var _ref3 = value || bgValue || {},
    type = _ref3.type,
    color = _ref3.color,
    gradient = _ref3.gradient,
    img = _ref3.img;
  var _ref4 = img[device] || {},
    position = _ref4.position,
    xPosition = _ref4.xPosition,
    yPosition = _ref4.yPosition,
    attachment = _ref4.attachment,
    repeat = _ref4.repeat,
    size = _ref4.size,
    customSize = _ref4.customSize;
  var updateBG = function updateBG(property, value, secondP) {
    var thirdP = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var newBG = (0, _immer.produce)(bgValue, function (draft) {
      if (null !== thirdP) {
        draft[property][secondP][thirdP] = value;
      } else if (property && secondP) {
        draft[property][secondP] = value;
      } else {
        draft[property] = value;
      }
    });
    setBgValue(newBG);
    _onChange(newBG);
  };
  (0, _react.useEffect)(function () {
    return _onChange(bgValue);
  }, [bgValue]);
  return /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "-7px"
    }
  }, /*#__PURE__*/React.createElement("label", null, name, " Type")), /*#__PURE__*/React.createElement(_Tab.Tab, {
    options: ["Color", "Gradient", "Image"],
    value: type,
    onChange: function onChange(val) {
      return updateBG("type", val);
    }
  }), type === "color" && /*#__PURE__*/React.createElement(_PanelCustomColorControl.PanelCustomColorControl, {
    label: "".concat(name, " Color"),
    value: color,
    onChange: function onChange(val) {
      return updateBG("color", val);
    }
  }), type === "gradient" && /*#__PURE__*/React.createElement(_BGradient.BGradient, {
    value: gradient,
    onChange: function onChange(val) {
      return updateBG("gradient", val);
    }
  }), type === "image" && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, name, " Image")), /*#__PURE__*/React.createElement(_MediaArea.MediaArea, {
    label: "Upload Image",
    value: value.img
    // onChange={(val) => updateBG("img", val.url, "url")}
    ,
    onChange: function onChange(val) {
      return _onChange(_objectSpread(_objectSpread({}, value), {}, {
        img: _objectSpread(_objectSpread({}, img), {}, {
          url: val.url
        })
      }));
    },
    width: "100%",
    height: "100%"
  }), img.url && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label["default"], {
    className: ""
  }, "Position"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.SelectControl, {
    value: position,
    options: _options.imgPositionOptions,
    onChange: function onChange(val) {
      return updateBG("img", _objectSpread(_objectSpread({}, img[device]), {}, {
        position: val
      }), device);
    }
  })), position === "custom" && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label["default"], {
    className: ""
  }, "X Position"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
    units: _options.unitOptions,
    value: xPosition,
    min: -2000,
    max: 2000,
    onChange: function onChange(val) {
      return updateBG("img", _objectSpread(_objectSpread({}, img[device]), {}, {
        xPosition: val
      }), device);
    }
  }), /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label["default"], {
    className: ""
  }, "Y Position"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
    units: _options.unitOptions,
    value: yPosition,
    min: -2000,
    max: 2000,
    onChange: function onChange(val) {
      return updateBG("img", _objectSpread(_objectSpread({}, img[device]), {}, {
        yPosition: val
      }), device);
    }
  }))), /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label["default"], {
    className: ""
  }, "Attachment"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.SelectControl, {
    value: attachment,
    options: _options.imgAttachmentOptions,
    onChange: function onChange(val) {
      return updateBG("img", _objectSpread(_objectSpread({}, img[device]), {}, {
        attachment: val
      }), device);
    }
  })), /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label["default"], {
    className: ""
  }, "Repeat"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.SelectControl, {
    value: repeat,
    options: _options.imgRepeatOptions,
    onChange: function onChange(val) {
      return updateBG("img", _objectSpread(_objectSpread({}, img[device]), {}, {
        repeat: val
      }), device);
    }
  })), /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label["default"], {
    className: ""
  }, "Repeat"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement("div", {
    className: "advExtraMargin"
  }, /*#__PURE__*/React.createElement(_components.SelectControl, {
    value: size,
    options: _options.imgSizeOptions,
    onChange: function onChange(val) {
      return updateBG("img", _objectSpread(_objectSpread({}, img[device]), {}, {
        size: val
      }), device);
    }
  })), size === "custom" && /*#__PURE__*/React.createElement(_react.Fragment, null, /*#__PURE__*/React.createElement(_components.Flex, {
    className: "mt20 mb5",
    gap: 4,
    align: "center"
  }, /*#__PURE__*/React.createElement(_Label["default"], {
    className: ""
  }, "Width"), /*#__PURE__*/React.createElement(_Device.Device, null)), /*#__PURE__*/React.createElement(_components.__experimentalUnitControl, {
    units: _options.unitOptions,
    value: customSize,
    min: -2000,
    max: 2000,
    onChange: function onChange(val) {
      return updateBG("img", _objectSpread(_objectSpread({}, img[device]), {}, {
        customSize: val
      }), device);
    }
  })))), " ");
};
//# sourceMappingURL=AdvBackground.js.map