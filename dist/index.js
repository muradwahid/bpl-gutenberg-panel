"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Device = _interopRequireDefault(require("./bpl-panel/Device/Device"));
var _DynamicTag = _interopRequireDefault(require("./bpl-panel/DynamicTag/DynamicTag"));
var _IncludeExclude = _interopRequireDefault(require("./bpl-panel/IncludeExclude/IncludeExclude"));
var _MediaArea = _interopRequireDefault(require("./bpl-panel/MediaArea/MediaArea"));
var _PanelAlign = _interopRequireDefault(require("./bpl-panel/PanelAlign/PanelAlign"));
var _PanelColorControl = _interopRequireDefault(require("./bpl-panel/PanelColorControl/PanelColorControl"));
var _PanelColorPicker = _interopRequireDefault(require("./bpl-panel/PanelColorPicker/PanelColorPicker"));
var _PanelCustomColorControl = _interopRequireDefault(require("./bpl-panel/PanelCustomColorControl/PanelCustomColorControl"));
var _PanelGradientPicker = _interopRequireDefault(require("./bpl-panel/PanelGradientPicker/PanelGradientPicker"));
var _PanelShadow = _interopRequireDefault(require("./bpl-panel/PanelShadow/PanelShadow"));
var _TabPanel = _interopRequireDefault(require("./bpl-panel/TabPanel/TabPanel"));
var _TinyEditor = _interopRequireDefault(require("./bpl-panel/TinyEditor/TinyEditor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  Device: _Device["default"],
  DynamicTag: _DynamicTag["default"],
  IncludeExClude: _IncludeExclude["default"],
  MediaArea: _MediaArea["default"],
  PanelAlign: _PanelAlign["default"],
  PanelColorControl: _PanelColorControl["default"],
  PanelColorPicker: _PanelColorPicker["default"],
  PanelCustomColorControl: _PanelCustomColorControl["default"],
  PanelGradientPicker: _PanelGradientPicker["default"],
  PanelShadow: _PanelShadow["default"],
  TabPanel: _TabPanel["default"],
  TinyEditor: _TinyEditor["default"]
};