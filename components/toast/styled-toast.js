import { styled } from "linaria/react";

const StyledToast = styled.div`

.toast-title {
    font-weight: bold;
}

.toast-message {
    -ms-word-wrap: break-word;
    word-wrap: break-word;
    font-size: 12px;
}

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

export default StyledToast;