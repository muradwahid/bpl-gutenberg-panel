"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicTag = void 0;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["tagName"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * DynamicTag Component
 * 
 * @param {object} props - The props object
 * @param {string} props.tagName - The tag name for the dynamic tag
 * @param {object} props.restProps - The rest of the props for the dynamic tag
 * @returns {JSX.Element} React component
 */
var DynamicTag = exports.DynamicTag = function DynamicTag(_ref) {
  var DynamicTag = _ref.tagName,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(DynamicTag, restProps);
};
//# sourceMappingURL=DynamicTag.js.map