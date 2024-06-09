"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateData = void 0;
var _immer = require("immer");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var updateData = exports.updateData = function updateData(attr, value) {
  for (var _len = arguments.length, props = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    props[_key - 2] = arguments[_key];
  }
  if (props.length === 0) {
    return value;
  }
  var currentProp = props[0],
    remainingProps = props.slice(1);
  if (remainingProps.length === 0) {
    return (0, _immer.produce)(attr, function (draft) {
      draft[currentProp] = value;
    });
  }
  return (0, _immer.produce)(attr, function (draft) {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData.apply(void 0, [draft[currentProp], value].concat(_toConsumableArray(remainingProps)));
  });
};
//# sourceMappingURL=helper.js.map