"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShadowCSS = exports.getOverlayCSS = exports.getGradientCSS = exports.getBoxCSS = exports.getBorderCSS = exports.getBackgroundCSS = void 0;
//getBoxCss
var getBoxCSS = exports.getBoxCSS = function getBoxCSS(value, property) {
  if (value) {
    var result = Object.keys(value).map(function (key) {
      return "".concat(property, "-").concat(key, ":").concat(value[key], ";");
    });
    return result.join(" ");
  }
  return "";
};

//gradient
var getGradientCSS = exports.getGradientCSS = function getGradientCSS(gradient) {
  var type = gradient.type,
    radialType = gradient.radialType,
    colors = gradient.colors,
    centerPositions = gradient.centerPositions,
    angel = gradient.angel;
  if (gradient) {
    var gradientColors = colors === null || colors === void 0 ? void 0 : colors.map(function (_ref) {
      var color = _ref.color,
        position = _ref.position;
      return "".concat(color, " ").concat(position, "%");
    });
    var liner = "linear-gradient(".concat(angel, "deg, ").concat(gradientColors, ")");
    var radial = "radial-gradient(".concat(radialType, " at ").concat(centerPositions === null || centerPositions === void 0 ? void 0 : centerPositions.x, "% ").concat(centerPositions === null || centerPositions === void 0 ? void 0 : centerPositions.y, "%,").concat(gradientColors, ")");
    return type === "linear" ? "background:".concat(liner, ";") : "background:".concat(radial, ";");
  }
  return "";
};

//get image position
var getImagePosition = function getImagePosition(img) {
  return "".concat(img !== null && img !== void 0 && img.position ? "background-position: ".concat(img.position !== "custom" ? "".concat(img.position, ";") : "".concat(img.xPosition, " ").concat(img.yPosition, ";")) : "", "\n                ").concat(img !== null && img !== void 0 && img.attachment ? "background-attachment: ".concat(img.attachment, ";") : "", "\n                ").concat(img !== null && img !== void 0 && img.repeat ? "background-repeat: ".concat(img.repeat, ";") : "", "\n                ").concat(img !== null && img !== void 0 && img.size ? "background-size:".concat(img.size !== "custom" ? img.size : "".concat(img.customSize, " ").concat(img.customSize), ";") : "");
};

//background image
var getImageCSS = function getImageCSS(img) {
  var desktop, tablet, mobile;
  if (Object.keys(img).length > 1) {
    if (img !== null && img !== void 0 && img.desktop) {
      desktop = getImagePosition(img === null || img === void 0 ? void 0 : img.desktop, "desktop");
    }
    if (img !== null && img !== void 0 && img.tablet) {
      tablet = getImagePosition(img === null || img === void 0 ? void 0 : img.tablet, "tablet");
    }
    if (img !== null && img !== void 0 && img.mobile) {
      mobile = getImagePosition(img === null || img === void 0 ? void 0 : img.mobile, "mobile");
    }
  }
  if (img) {
    return {
      global: "background-image: url(".concat(img.url, ");"),
      desktop: desktop,
      tablet: tablet,
      mobile: mobile
    };
  }
  return "";
};

//background color
var getColor = function getColor(color) {
  return " ".concat(color ? "background: ".concat(color, ";") : "");
};

//getBorderCss
var getBorderCSS = exports.getBorderCSS = function getBorderCSS(border) {
  var _ref2 = border || {},
    _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? "0px" : _ref2$width,
    _ref2$style = _ref2.style,
    style = _ref2$style === void 0 ? "solid" : _ref2$style,
    _ref2$color = _ref2.color,
    color = _ref2$color === void 0 ? "#0000" : _ref2$color,
    _ref2$side = _ref2.side,
    side = _ref2$side === void 0 ? "all" : _ref2$side,
    _ref2$radius = _ref2.radius,
    radius = _ref2$radius === void 0 ? "0px" : _ref2$radius;
  var borderSideCheck = function borderSideCheck(s) {
    var bSide = side === null || side === void 0 ? void 0 : side.toLowerCase();
    return (bSide === null || bSide === void 0 ? void 0 : bSide.includes("all")) || (bSide === null || bSide === void 0 ? void 0 : bSide.includes(s));
  };
  var borderCSS = "".concat(width, " ").concat(style, " ").concat(color);
  var styles = "\n\t\t".concat(["top", "right", "bottom", "left"].map(function (side) {
    return borderSideCheck(side) ? "border-".concat(side, ": ").concat(borderCSS, ";") : "";
  }).join(""), "\n\t\t").concat(!radius ? "" : "border-radius: ".concat(radius, ";"), "\n\t");
  return styles;
};

//getShadowCSS
var getShadowCSS = exports.getShadowCSS = function getShadowCSS(shadow) {
  var _ref3 = shadow || {},
    _ref3$type = _ref3.type,
    type = _ref3$type === void 0 ? "box" : _ref3$type,
    _ref3$hOffset = _ref3.hOffset,
    hOffset = _ref3$hOffset === void 0 ? "0px" : _ref3$hOffset,
    _ref3$vOffset = _ref3.vOffset,
    vOffset = _ref3$vOffset === void 0 ? "0px" : _ref3$vOffset,
    _ref3$blur = _ref3.blur,
    blur = _ref3$blur === void 0 ? "0px" : _ref3$blur,
    _ref3$spreed = _ref3.spreed,
    spreed = _ref3$spreed === void 0 ? "0px" : _ref3$spreed,
    _ref3$color = _ref3.color,
    color = _ref3$color === void 0 ? "#7090b0" : _ref3$color,
    _ref3$isInset = _ref3.isInset,
    isInset = _ref3$isInset === void 0 ? false : _ref3$isInset;
  var inset = isInset ? "inset" : "";
  var offsetBlur = "".concat(hOffset, " ").concat(vOffset, " ").concat(blur);
  var styles = "text" === type ? "".concat(offsetBlur, " ").concat(color) : "".concat(offsetBlur, " ").concat(spreed, " ").concat(color, " ").concat(inset);
  return styles || "none";
};

//background
var getBackgroundCSS = exports.getBackgroundCSS = function getBackgroundCSS(background) {
  var normal = background.normal,
    hover = background.hover;
  var type = normal.type,
    color = normal.color,
    gradient = normal.gradient,
    img = normal.img;
  var hoverType = hover.type,
    hoverColor = hover.color,
    hoverGradient = hover.gradient,
    hoverImg = hover.img,
    transition = hover.transition;
  var bg = type === "color" ? getColor(color) : type === "gradient" ? getGradientCSS(gradient) : type === "image" ? getImageCSS(img).global : "";
  var hoverBg = hoverType === "color" ? getColor(hoverColor) : hover.type === "gradient" ? getGradientCSS(hoverGradient) : hover.type === "image" ? getImageCSS(hoverImg).global : "";
  return {
    normal: {
      background: bg,
      desktop: getImageCSS(img).desktop,
      tablet: getImageCSS(img).tablet,
      mobile: getImageCSS(img).mobile
    },
    hover: {
      background: hoverBg,
      desktop: getImageCSS(hover.img).desktop,
      tablet: getImageCSS(hover.img).tablet,
      mobile: getImageCSS(hover.img).mobile
    },
    transition: transition
  };
};

//overlay
var getOverlayCSS = exports.getOverlayCSS = function getOverlayCSS(overlay) {
  var colors = overlay.colors;
  var opacity = overlay.opacity,
    blend = overlay.blend,
    isCssFilter = overlay.isCssFilter,
    blur = overlay.blur,
    brightness = overlay.brightness,
    contrast = overlay.contrast,
    saturation = overlay.saturation,
    hue = overlay.hue;
  var filter = isCssFilter ? "filter:brightness(".concat(brightness, "%) contrast(").concat(contrast, "%) saturation(").concat(saturation, "%) blur(").concat(blur, "px) hue-rotate(").concat(hue, "deg);\n    -webkit-filter:brightness(").concat(brightness, "%) contrast(").concat(contrast, "%) saturation(").concat(saturation, "%) blur(").concat(blur, "px) hue-rotate(").concat(hue, "deg);") : "";
  return {
    normal: {
      background: getBackgroundCSS(colors).normal.background,
      desktop: getBackgroundCSS(colors).normal.desktop,
      tablet: getBackgroundCSS(colors).normal.tablet,
      mobile: getBackgroundCSS(colors).normal.mobile
    },
    hover: {
      background: getBackgroundCSS(colors).hover.background,
      desktop: getBackgroundCSS(colors).hover.desktop,
      tablet: getBackgroundCSS(colors).hover.tablet,
      mobile: getBackgroundCSS(colors).hover.mobile
    },
    transition: getBackgroundCSS(colors).transition,
    opacity: opacity ? "opacity: ".concat(opacity, ";") : "",
    blend: blend ? "mix-blend-mode: ".concat(blend, ";") : "",
    filter: filter
  };
};
//# sourceMappingURL=index.js.map