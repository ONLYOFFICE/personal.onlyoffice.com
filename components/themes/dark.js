import globalColors from "../utils/global-colors";

const { white, whiteHover, grayMain, orangeMain, orangeHover } = globalColors;

const Dark = {
  button: {
    textColor: white,
    textColorTransparentType: white,
    textColorTransparentTypeHover: orangeMain,
    textColorSecondaryType: grayMain,
    borderColorHover: orangeMain,
    backgroundColorPrimary: orangeMain,
    backgroundColorSecondary: white,
    backgroundColorPrimaryHover: orangeHover,
    backgroundColorSecondaryHover: whiteHover,

    borderTransparentType: `1px solid ${globalColors.white}`,
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
    fontSize: "13px",
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

export default Dark;
