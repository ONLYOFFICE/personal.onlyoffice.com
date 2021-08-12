import React from "react";
import Portal from "../portal";
import SnackBar from "./styled-snackbar";

const Snackbar = (props) => {
  return (
    <Portal>
      <SnackBar {...props} />
    </Portal>
  );
};

export default Snackbar;
