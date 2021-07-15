import globalColors from "../utils/global-colors";

const { white, grayMain, grayHover, orangeMain, orangeHover, graySecnodary, gray, grayTextInputHover } = globalColors;

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

textInput: {
    textColor: gray,
    textColorHover: grayHover,
    textColorSecondaryType: graySecnodary,
    textColorSecondaryTypeHover: gray,

    backgroundColor: grayTextInputHover,
    backgroundColorPrimaryHover: white,
    backgroundColorDisabled: "#F9F9F9",
    backgroundColorSuccess: "#F9FEEF",
    backgroundColorError: "#FFF7F7",

    border: "1px solid",
    borderRadius: "3px",
    borderColor: "#AAAAAA",
    borderColorHover: "#666666",
    borderColorDisabled: "#AAAAAA",
    borderColorSuccess: "#8BB825",
    borderColorError: "#CB0000",

    position: "absolute",
    display: "block",
    boxSizing: "border-box",
    width: "544px",
    height: "56px",
    padding: "0 16px",
    margin: "0",
    overflow: "auto",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "22px",
    textAlign: "left",
    verticalAlign: "center",
    textDecoration: "none",
    textTransform: "none",
    textShadow:"none",
    outline: "none",
    
    label: {
      top: "3px",
      fontSize: "12px",
    },
  },
};

export default Base;
