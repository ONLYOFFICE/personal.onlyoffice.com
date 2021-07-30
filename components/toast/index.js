import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import StyledToast from "./styled-toast";
import Portal from "../portal"

const Toast = (props) => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
      setTimeout(() => setIsOpen(!isOpen), 5000)
    }, []);

    const onClickHandler = (e) => {
      setIsOpen(!isOpen);
      props.onClick && props.onClick(e);
    };

    const {
      text
    } = props;

    return (
    <Portal>
      <StyledToast isOpen={isOpen} onClick={onClickHandler}>
      <div id="toast-container" className="toast-top-right">
                <div className="toast toast-error">
                    <div className="toast-message">
                        {text}
                </div>
            </div>
        </div>
      </StyledToast>
    </Portal>
    );
};

Toast.propTypes = {
    /**   text font-size */
    fontSize: PropTypes.string,
    /**   text font-weight */
    fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**   text line height */
    lineHeight: PropTypes.string,
    /** Accepts CSS style */
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    /** Accepts id */
    id: PropTypes.string,
    /** Accepts class */
    className: PropTypes.string,
  };
  
  Toast.defaultProps = {
    
  };
  
  export default Toast;