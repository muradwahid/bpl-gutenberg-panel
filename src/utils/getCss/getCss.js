//getBoxCss
export const getBoxCss = (value, property) => {
  if (value) {
    const result = Object.keys(value).map(
      (key) => `${property}-${key}:${value[key]};`
    );
    return result.join(" ");
  }
  return "";
};

//gradient
export const getGradientCss = (gradient) => {
  const { type, radialType, colors, centerPositions, angel } = gradient;
  if (gradient) {
    const gradientColors = colors?.map(
      ({ color, position }) => `${color} ${position}%`
    );
    const liner = `linear-gradient(${angel}deg, ${gradientColors})`;
    const radial = `radial-gradient(${radialType} at ${centerPositions?.x}% ${centerPositions?.y}%,${gradientColors})`;

    return type === "linear" ? `background:${liner};` : `background:${radial};`;
  }
  return "";
};

//get image position
const getImagePosition = (img) => {
  return `${img?.position
      ? `background-position: ${img.position !== "custom"
        ? `${img.position};`
        : `${img.xPosition} ${img.yPosition};`
      }`
      : ""
    }
                ${img?.attachment
      ? `background-attachment: ${img.attachment};`
      : ""
    }
                ${img?.repeat ? `background-repeat: ${img.repeat};` : ""}
                ${img?.size
      ? `background-size:${img.size !== "custom"
        ? img.size
        : `${img.customSize} ${img.customSize}`
      };`
      : ""
    }`;
};

//background image
const getImageCss = (img) => {
  let desktop, tablet, mobile;
  if (Object.keys(img).length > 1) {
    if (img?.desktop) {
      desktop = getImagePosition(img?.desktop, "desktop");
    }
    if (img?.tablet) {
      tablet = getImagePosition(img?.tablet, "tablet");
    }
    if (img?.mobile) {
      mobile = getImagePosition(img?.mobile, "mobile");
    }
  }
  if (img) {
    return {
      global: `background-image: url(${img.url});`,
      desktop,
      tablet,
      mobile,
    };
  }
  return "";
};

//background color
const getColor = (color) => {
  return ` ${color ? `background: ${color};` : ""}`;
};

//getBorderCss
export const getBorderCSS = (border) => {
  const {
    width = "0px",
    style = "solid",
    color = "#0000",
    side = "all",
    radius = "0px",
  } = border || {};

  const borderSideCheck = (s) => {
    const bSide = side?.toLowerCase();
    return bSide?.includes("all") || bSide?.includes(s);
  };
  const borderCSS = `${width} ${style} ${color}`;

  const styles = `
		${["top", "right", "bottom", "left"]
      .map((side) =>
        borderSideCheck(side) ? `border-${side}: ${borderCSS};` : ""
      )
      .join("")}
		${!radius ? "" : `border-radius: ${radius};`}
	`;

  return styles;
};

//getShadowCSS
export const getShadowCSS = (shadow) => {
  const {
    type = "box",
    hOffset = "0px",
    vOffset = "0px",
    blur = "0px",
    spreed = "0px",
    color = "#7090b0",
    isInset = false,
  } = shadow || {};

  const inset = isInset ? "inset" : "";
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;

  const styles =
    "text" === type
      ? `${offsetBlur} ${color}`
      : `${offsetBlur} ${spreed} ${color} ${inset}`;

  return styles || "none";
};

//background
export const getBackgroundCSS = (background) => {
  const { normal, hover } = background;
  const { type, color, gradient, img } = normal;
  const {
    type: hoverType,
    color: hoverColor,
    gradient: hoverGradient,
    img: hoverImg,
    transition,
  } = hover;

  const bg =
    type === "color"
      ? getColor(color)
      : type === "gradient"
        ? getGradientCss(gradient)
        : type === "image"
          ? getImageCss(img).global
          : "";
  const hoverBg =
    hoverType === "color"
      ? getColor(hoverColor)
      : hover.type === "gradient"
        ? getGradientCss(hoverGradient)
        : hover.type === "image"
          ? getImageCss(hoverImg).global
          : "";
  return {
    normal: {
      background: bg,
      desktop: getImageCss(img).desktop,
      tablet: getImageCss(img).tablet,
      mobile: getImageCss(img).mobile,
    },
    hover: {
      background: hoverBg,
      desktop: getImageCss(hover.img).desktop,
      tablet: getImageCss(hover.img).tablet,
      mobile: getImageCss(hover.img).mobile,
    },
    transition,
  };
};

//overlay
export const getOverlayCSS = (overlay) => {
  const { colors } = overlay;
  const {
    opacity,
    blend,
    isCssFilter,
    blur,
    brightness,
    contrast,
    saturation,
    hue,
  } = overlay;
  const filter = isCssFilter
    ? `filter:brightness(${brightness}%) contrast(${contrast}%) saturation(${saturation}%) blur(${blur}px) hue-rotate(${hue}deg);
    -webkit-filter:brightness(${brightness}%) contrast(${contrast}%) saturation(${saturation}%) blur(${blur}px) hue-rotate(${hue}deg);`
    : "";
  return {
    normal: {
      background: getBackgroundCSS(colors).normal.background,
      desktop: getBackgroundCSS(colors).normal.desktop,
      tablet: getBackgroundCSS(colors).normal.tablet,
      mobile: getBackgroundCSS(colors).normal.mobile,
    },
    hover: {
      background: getBackgroundCSS(colors).hover.background,
      desktop: getBackgroundCSS(colors).hover.desktop,
      tablet: getBackgroundCSS(colors).hover.tablet,
      mobile: getBackgroundCSS(colors).hover.mobile,
    },
    transition: getBackgroundCSS(colors).transition,
    opacity: opacity ? `opacity: ${opacity};` : "",
    blend: blend ? `mix-blend-mode: ${blend};` : "",
    filter,
  };
};