import React from "react";
import Portal from "../portal";
import SnackBar from "./styled-snackbar";

const Snackbar = (props) => {
  return (
    <Portal>
      <SnackBar {...props}>{props.children}</SnackBar>
    </Portal>
  );
};

export default Snackbar;
