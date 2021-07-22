import globalColors from "../utils/global-colors";

const { white, grayMain, grayHover, orangeMain, orangeHover, graySecnodary, gray, grayTextInput, grayTextInputHover } = globalColors;
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
    display: "inline-block",
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

    backgroundColor: "transparent",
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
    boxShadow: "none",
    width: "544px",
    height: "56px",
    scale: "100%",
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
      color: "#AAAAAA",
      colorHover: gray,
      padding: "0 15px",
      left: "2px",
      top: "6px",
      fontSize: "12px",
    },

    media: {
      width: "100%",
      fontSize: "13px",
    }
  },

  text: {
    colorText: gray,

    display: "inline-block",
    padding: "0",
    margin: "0",
    textAlign: "left",
    hoverTextDecoration: "none",
    textDecoration: "none",
    textTransform: "none",
    lineHeight: "21px",
    fontSize: "14px",
    fontWeight: "400",
    textOverflow: "none",
    overflow: "hidden",
  },

  separator: {
    display: "flex",
    width: "1px",
    alignItems: "center",

    div: {
      backgroundColor: "#CCCCCC",

      height: "1px",
      flex: "1",
    },

    span: {
      padding: "0 12px",
    },
  },


  checkbox: {
    color: grayTextInput,
    fontSize: "14px",
    paddingBottom: "12px",
    lineHeight: "160%",
  },

  iconButton: {
    width: "20px"
  },

  reviewPanel: {
    margin: "16px",
    padding: "24px",
    paddingBottom: "7px",
    display: "flex",
    maxWidth: "336px",
    minWidth: "260px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #CCCCCC",
    borderRadius: "5px",

    media:{
      device: {
        paddingBottom: "4px",
      },
      mobile: {
        padding: "16px",
        fontSize: "14px",
        lineHeight: "22px",
        paddingBottom: "0px",
      },
    },
  },

  header: {
    fontSize: ["48px", "40px", "32px", "24px", "18px", "14px", "14px"],
    lineHeight: ["74px", "53px", "32px", "32px", "24px", "19px", "19px"],
    fontWeight: 700,
    overflow: "auto"
  },
  
};

export default Base;
