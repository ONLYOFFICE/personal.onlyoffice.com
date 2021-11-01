import globalColors from "../utils/global-colors";

const {
  white,
  grayMain,
  grayHover,
  orangeMain,
  orangeHover,
  graySecnodary,
  gray,
  grayTextInput,
  grayLight,

  activeSuccess,
  activeError,
  hoverSuccess,
  hoverError,
} = globalColors;
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

    backgroundColor: "#fff",
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
    width: "100%",
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
    textShadow: "none",
    outline: "none",

    placeholderColor: "#CCC",

    label: {
      color: "#AAAAAA",
      colorHover: gray,
      padding: "0 15px",
      left: "2px",
      top: "8px",
      fontSize: "12px",
    },

    media: {
      width: "100%",
      fontSize: "13px",
    },
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
      backgroundColor: grayLight,

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
    width: "20px",
  },

  reviewPanel: {
    margin: "8px",
    padding: "24px",
    paddingBottom: "7px",
    display: "flex",
    maxWidth: "336px",
    minWidth: "260px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #CCCCCC",
    borderRadius: "5px",

    media: {
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
    lineHeight: ["74px", "53px", "38px", "32px", "24px", "19px", "19px"],
    fontWeight: 700,
    overflow: "auto",
    color: gray,
    textTransform: "none",
    textDecoration: "none",
    textAlign: "left",
    padding: "0px",
  },

  form: {
    border: `1px solid ${grayLight}`,
    borderRadius: "5px",
    boxShadow: "0px 20px 50px rgb(85 85 85 / 15%)",
    padding: "24px 32px 44px 32px",
  },

  socialButton: {},

  toastr: {
    svg: {
      width: "24px",
      minWidth: "24px",
      height: "24px",
      minHeight: "24px",
      color: grayTextInput,
      marginRight: "11px",
    },

    title: {
      wordWrap: "break-word",
      fontSize: "12px",
      margin: "0px",
      lineHeight: "24px",
      cursor: "pointer",
      userSelect: "none",
      color: grayTextInput,
    },
  },

  toast: {
    active: {
      success: activeSuccess,
      error: activeError,
    },
    hover: {
      success: hoverSuccess,
      error: hoverError,
    },

    zIndex: "9999",
    width: "365px",
    color: white,
    top: "60px",
    right: "12px",
    marginTop: "0px",

    closeButton: {
      color: white,
      fontWeight: "700",
      fontSize: "14px",
      background: "transparent",
      padding: "0px",
      opacity: "0.7",
      hoverOpacity: "1",
      transition: "0.3s ease",
    },

    main: {
      marginBottom: "1rem",
      maxHeight: "800px",
      overflow: "hidden",
      borderRadius: "3px",
      color: gray,
      margin: "0 0 12px",
      padding: "12px 15px 7px",
      minHeight: "32px",
      width: "100%",
      right: "0",
      transition: "0.2s",

      hover: {
        boxShadow: "1px 2px 4px #D1D1D1",
      },
    },
  },

  scrollbar: {
    backgroundColorVertical: "rgba(0, 0, 0, 0.1)",
    backgroundColorHorizontal: "rgba(0, 0, 0, 0.1)",
  },

  infoPanel: {
    display: "flex",
    flexDirectionLeft: "row-reverse",
    flexDirectionRight: "none",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1120px",
    minHeight: "380px",
    margin: "0 auto",
    marginBottom: "32px",

    background: "transparent",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0px 7px 15px rgb(85 85 85 / 10%)",
    boxSizing: "border-box",

    infoPanelText: {
      padding: "10px",
      pWidthLeft: "504px",
      pWidthRight: "568px",
    },

    laptopM: {
      width: "928px",
      padding: "32px",
      minHeight: "355px",
    },
    laptop: {
      width: "calc(100% - 96px)",
      padding: "16px 15px 32px",
      flexDirection: "column",
      height: "100%",
    },
    mobileL: {
      width: "90%",
      padding: "16px 10px 20px",
      flexDirection: "column",
      height: "100%",
    },
  },
};

export default Base;
