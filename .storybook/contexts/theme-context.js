import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "../../components/theme-provider";
import { Dark, Base } from "../../components/themes/";

const ThemeWrapper = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

ThemeWrapper.propTypes = {
  theme: PropTypes.any,
};

const themeParams = [
  {
    name: "Default Theme",
    props: { theme: Base },
    default: true,
  },
  {
    name: "Dark Theme",
    props: { theme: Dark },
  },
];

const ThemeContext = {
  icon: "photo",
  title: "Themes",
  components: [ThemeWrapper],
  params: themeParams,
  options: {
    deep: true,
    disable: false,
    cancelable: false,
  },
};

export default ThemeContext;
