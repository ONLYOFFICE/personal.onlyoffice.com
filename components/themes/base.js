import globalColors from "../utils/global-colors";

const { white, grayMain, grayHover, orangeMain, orangeHover } = globalColors;

const Base = {
  button: {
    textColor: white,
    textColorTransparentType: grayMain,
    textColorTransparentTypeHover: orangeMain,
    textColorSecondaryType: white,
    borderColorHover: orangeMain,
    backgroundColorPrimary: orangeMain,
    backgroundColorSecondary: grayMain,
    backgroundColorPrimaryHover: orangeHover,
    backgroundColorSecondaryHover: grayHover,

    borderTransparentType: `1px solid ${grayMain}`,
    borderRadius: "3px",

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    outline: "none",
    boxSizing: "border-box",
    fontWeight: "600",
    margin: "0",
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
    topVerticalAlign: "text-top",
    middleVerticalAlign: "middle",
    bottomVerticalAlign: "text-bottom",
    lineHeight: "13px",
    textTransform: "uppercase",
    fontSize: "12px",
  },

  a: {
    textColor: orangeMain,

    padding: "0",
    margin: "0",
    display: "inline-box",
    textAlign: "left",
    hoverTextDecoration: "none",
    textDecoration: "underline",
    textTransform: "none",
    lineHeight: "21px",
    fontSize: "14px",
    fontWeight: "400",
    textOverflow: "none",
  },
};

export default Base;
