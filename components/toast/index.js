import React from "react";
import { cssTransition } from "react-toastify";
import PropTypes from "prop-types";
import StyledToast from "./styled-toast";

const Slide = cssTransition({
  enter: "SlideIn",
  exit: "SlideOut",
});

const Toast = (props) => {
  const onToastClick = () => {
    let documentElement = document.getElementsByClassName("Toastify__toast");
    if (documentElement.length > 1)
      for (var i = 0; i < documentElement.length; i++) {
        documentElement &&
          documentElement[i].style.setProperty("position", "static");
      }
  };

  return (
    <StyledToast
      {...props}
      draggable={true}
      position="top-right"
      hideProgressBar={true}
      newestOnTop={true}
      pauseOnFocusLoss={false}
      transition={Slide}
      closeOnClick
      onClick={onToastClick}
    />
  );
};

Toast.propTypes = {
  /** Auto close toast */
  autoClosed: PropTypes.bool,
  /** Accepts class  */
  className: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts css style  */
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  /** Text toast */
  text: PropTypes.string,
  /** Title inside a toast */
  title: PropTypes.string,
  /** Define color and icon of toast */
  type: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
};

Toast.defaultProps = {
  autoClosed: true,
  text: "Demo text for example",
  title: "Demo title",
  type: "success",
};

export default Toast;