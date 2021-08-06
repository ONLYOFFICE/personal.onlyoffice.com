import { styled } from "linaria/react";
import {ToastContainer} from "react-toastify";
import { device } from "../utils/devices";
import Base from "../themes/base";

const StyledToast = styled(ToastContainer)`
  z-index: 9999;
  -webkit-transform: translateZ(9999px);
  position: fixed;
  width: 365px;
  box-sizing: border-box;
  color: #FFFFFF;
  top: 60px;
  right: 12px;
  margin-top: 0px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  
  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards;
  }
  .Toastify__toast-body {
    margin: auto 0;
    -ms-flex: 1;
    flex: 1;
  }
  .Toastify__close-button {
    color: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s ease;
    -ms-flex-item-align: start;
    align-self: flex-start;
  }
  .Toastify__close-button:focus,
  .Toastify__close-button:hover {
    opacity: 1;
  }
  @keyframes SlideIn {
    from {
      transform: translate3d(150%, 0, 0);
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
  }
  .SlideIn {
    animation-name: SlideIn;
  }
  @keyframes SlideOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .SlideOut {
    animation-name: SlideOut;
  }
  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
  }
  .Toastify__toast--success {
    background-color: #CAE796;

    &:hover {
      background-color: #BCDf7E;
    }
  }
  .Toastify__toast--error {
    background-color: #ffbfaa;

    &:hover {
      background-color: #ffa98d;
    }
  }
  .Toastify__toast {
    box-sizing: border-box;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    max-height: 800px;
    overflow: hidden;
    cursor: pointer;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    color: #000000;
    margin: 0 0 12px;
    padding: 12px 15px 7px;
    min-height: 32px;
    font: normal 12px "Open Sans", sans-serif;
    width: 100%;
    right: 0;
    transition: 0.2s;

    &:hover{
        box-shadow: 1px 2px 4px #D1D1D1;
    }

    @media ${device.tablet} {
      // TODO: Discuss the behavior of notifications on mobile devices
      position: absolute;
      &:nth-child(1) {
        z-index: 3;
        top: 0px;
      }
      &:nth-child(2) {
        z-index: 2;
        top: 8px;
      }
      &:nth-child(3) {
        z-index: 1;
        top: 16px;
      }
    }
  }
  .Toastify__toast-body {
    display: flex;
    align-items: center;
  }
  @media ${device.tablet} {
    right: 16px;
  }
  @media only screen and (max-width: 480px) {
    left: 0;
    margin: auto;
    right: 0;
    width: 100%;
    max-width: calc(100% - 32px);

    @keyframes SlideIn {
      from {
        transform: translate3d(0, -150%, 0);
      }
      50% {
        transform: translate3d(0, 0, 0);
      }
    }
  }

/* Old toaster */

.toast-message a,
.toast-message label {
    color: #000;
}

.toast-message a:hover {
    text-decoration: underline;
}

.toast-top-full-width {
    top: 0;
    right: 0;
    width: 100%;
}

.toast-bottom-full-width {
    bottom: 0;
    right: 0;
    width: 100%;
}

.toast-top-left {
    top: 12px;
    left: 12px;
}

.toast-top-right {
    right: 12px;
    top: 60px;
}

.toast-bottom-right {
    right: 12px;
    bottom: 12px;
}

.toast-bottom-left {
    bottom: 12px;
    left: 12px;
}

#toast-container {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    z-index: 999999;
}
.toast-container {
    width: 100%;
}
#toast-container > div,
.toast-container > div,
.toast-popup-container > div {
    background-position: 15px center;
    background-repeat: no-repeat;
    border-radius: 3px;
    color: #000;
    margin: 0 0 6px;
    padding: 15px 15px 15px 50px;
}
#toast-container > div,
.toast-popup-container > div {
    width: 300px;
}

.toast {
    background-color: #030303;
}

.toast-success {
    background-color: #cae796;
}

.toast-error {
    background-color: #ffbfaa;
}

.toast-info {
    background-color: #f1da92;
}

.toast-warning {
    background-color: #F89406;
}

#toast-container .toast-success:hover {
    background-color: #bcdf7e;
}

#toast-container .toast-error:hover {
    background-color: #ffa98d;
}

#toast-container .toast-info:hover {
    background-color: #eed27b;
}

#toast-container > :hover {
    box-shadow: 1px, 2px, 4px, #D1D1D1;
    cursor: pointer;
}

#toast-container > .toast-info,
.toast-container > .toast-info,
.toast-popup-container > .toast-info {
    background-image: url("/icons/toast_icon03.png");
}

#toast-container > .toast-error,
.toast-container > .toast-error,
.toast-popup-container > .toast-error {
    background-image: url("/icons/toast_icon01.png");
}

#toast-container > .toast-success,
.toast-container > .toast-success,
.toast-popup-container > .toast-success {
    background-image: url("/icons/toast_icon02.png");
}

#toast-container > .toast-warning,
.toast-container > .toast-warning,
.toast-popup-container > .toast-warning  {
    background-image: url("/icons/toast_icon01.png");
}

/*Popup Toasts*/

.toast-popup-container .toast {
    width: auto;
    padding: 14px 0 14px 40px; 
    background-position: 8px center;
    border-radius: 0;
    margin-top:6px;
}

.toast-popup-container .toast .toast-message {
    color: #333;
}

/*Responsive Design*/

@media all and (max-width: 240px) {
    #toast-container > div {
        padding: 8px 8px 8px 50px;
        width: 108px;
    }
}

@media all and (min-width: 241px) and (max-width: 320px) {
    #toast-container > div {
        padding: 8px 8px 8px 50px;
        width: 128px;
    }
}

@media all and (min-width: 321px) and (max-width: 480px) {
    #toast-container > div {
        padding: 8px 8px 8px 50px;
        width: 192px;
    }
}

@media all and (min-width: 481px) and (max-width: 768px) {
    #toast-container > div {
        padding: 15px 15px 15px 50px;
        width: 300px;
    }
}

/* overrides */
#toast-container.toast-top-full-width > div,
#toast-container.toast-bottom-full-width > div {
    width: 100%;
    margin: 1px 0 1px 0;
}
`;
StyledToast.defaultProps = { theme: Base };

export default StyledToast;