"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _blockEditor = require("@wordpress/block-editor");
var _fa = require("react-icons/fa");
require("./mediaArea.css");
var MediaArea = function MediaArea(_ref) {
  var _ref$types = _ref.types,
    types = _ref$types === void 0 ? ['image'] : _ref$types,
    image = _ref.image,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    defaults = _ref["default"],
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? '50px' : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '50px' : _ref$width,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'Choose SVG' : _ref$label;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "custom-media-area-component"
  }, /*#__PURE__*/React.createElement(_blockEditor.MediaUpload, {
    gallery: false,
    onSelect: function onSelect(value) {
      return onChange(value.url);
    },
    value: image,
    allowedTypes: types,
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement("div", {
        className: "media-area-container"
      }, /*#__PURE__*/React.createElement("img", {
        onClick: open,
        style: {
          height: height,
          width: width
        },
        className: "media-area-image",
        src: image || defaults,
        alt: ""
      }), /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return onChange('');
        },
        className: "media-delete"
      }, /*#__PURE__*/React.createElement(_fa.FaRegTrashAlt, null)), /*#__PURE__*/React.createElement("div", {
        onClick: open,
        className: "media-bottom"
      }, /*#__PURE__*/React.createElement("span", null, label)));
    },
    multiple: false
  })));
};
var _default = exports["default"] = MediaArea;