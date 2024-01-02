"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _tinymceReact = require("@tinymce/tinymce-react");
var _blockEditor = require("@wordpress/block-editor");
var _components = require("@wordpress/components");
var _react = require("react");
require("./tinyEditor.css");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable no-unused-vars */
var TinyEditor = function TinyEditor(_ref) {
  var value = _ref.value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 180 : _ref$height;
  var editorRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    media = _useState2[0],
    setMedia = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    content = _useState4[0],
    setContent = _useState4[1];
  var _useState5 = (0, _react.useState)(value || 'This is the initial content of the editor'),
    _useState6 = _slicedToArray(_useState5, 2),
    initialValue = _useState6[0],
    setInitialValue = _useState6[1];
  var log = function log() {
    if (editorRef.current) {
      setContent(editorRef.current.getContent());
    }
  };
  (0, _react.useEffect)(function () {
    var _document;
    var iframe = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('iframe');
    var iframeContent = iframe.contentDocument || iframe.contentWindow.document;
    var tinymce = iframeContent.querySelector('.mce-content-body');
    var createImgEl = document.createElement('img');
    createImgEl.src = media.url;
    createImgEl.style.maxWidth = '100%';
    createImgEl.style.maxHeight = '100%';
    tinymce === null || tinymce === void 0 || tinymce.appendChild(createImgEl);
  }, [media.url]);
  (0, _react.useEffect)(function () {
    onChange(content);
  }, [content]);
  (0, _react.useEffect)(function () {
    setContent(value);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_blockEditor.MediaUploadCheck, null, /*#__PURE__*/React.createElement(_blockEditor.MediaUpload, {
    gallery: true,
    onSelect: function onSelect(value) {
      return setMedia(value);
    },
    allowedTypes: ['image/svg+xml'],
    render: function render(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/React.createElement("button", {
        className: "custom-tinymce-button",
        onClick: open
      }, /*#__PURE__*/React.createElement("span", {
        className: "dashicons dashicons-admin-media"
      }), "Add Media");
    },
    multiple: false
  })), /*#__PURE__*/React.createElement(_tinymceReact.Editor, {
    apiKey: "d1lxc40qcx6ad71i4bn1ih4d8l8oalalg9efymoc5l3ay9qo",
    onChange: function onChange(evt, editor) {
      return setContent(editor.getContent());
    },
    onInit: function onInit(evt, editor) {
      return editorRef.current = editor;
    },
    initialValue: initialValue,
    init: {
      height: height,
      selector: 'textarea',
      menubar: false,
      plugins: ['lists link image charmap', 'fullscreen', 'media paste'],
      toolbar: 'undo redo formatselect bold italic link alignleft aligncenter alignright alignjustify bullist numlist outdent indent removeformat specilchar fullscreen',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(_components.Button, {
    style: {
      margin: '10px 0'
    },
    variant: "primary",
    onClick: log
  }, "Apply")));
};
var _default = exports["default"] = TinyEditor;