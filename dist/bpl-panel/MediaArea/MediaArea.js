"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _blockEditor = require("@wordpress/block-editor");
var _fa = require("react-icons/fa");
// import './__mediaArea.scss';

var MediaArea = function MediaArea(_ref) {
  var image = _ref.image,
    renderFunction = _ref.renderFunction,
    defaults = _ref["default"];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n          .media-area-container {\n\tcursor: pointer;\n  position: relative;\n  overflow: hidden;\n  height: 110px;\n  .media-bottom {\n    position: absolute;\n    bottom: -40px;\n    left: 0;\n    right: 0;\n    text-align: center;\n    background: #161616;\n    color: white;\n    padding: 5px 0;\n    transition: all 0.3s ease-in-out;\n  }\n  .media-delete {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    background: #161616;\n    padding: 3px 6px;\n\t\tdisplay: none;\n    color: white;\n  }\n}\n.media-area-container:hover {\n  .media-bottom {\n    bottom: 0;\n  }\n\t.media-delete{\n\t\tdisplay: block;\n\t}\n}\n          "), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_blockEditor.MediaUpload, {
    gallery: true,
    onSelect: function onSelect(value) {
      return renderFunction(value);
    },
    value: image,
    allowedTypes: ['image'],
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement("div", {
        className: "media-area-container"
      }, /*#__PURE__*/React.createElement("img", {
        onClick: open,
        className: "media-area-image",
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        },
        src: image || defaults,
        alt: ""
      }), /*#__PURE__*/React.createElement("div", {
        onClick: function onClick() {
          return renderFunction(defaults);
        },
        className: "media-delete"
      }, /*#__PURE__*/React.createElement(_fa.FaRegTrashAlt, null)), /*#__PURE__*/React.createElement("div", {
        onClick: open,
        className: "media-bottom"
      }, /*#__PURE__*/React.createElement("span", null, "Choose Image")));
    },
    multiple: false
  })));
};
var _default = exports["default"] = MediaArea;