import React from "react";
import { toast } from "react-toastify";

import SuccesToastIcon from "../../static/icons/toast_icon02.react.svg";
import ErrorToastIcon from "../../static/icons/toast_icon01.react.svg";

import Text from "../text";
import { StyledDiv, IconWrapper } from "./styled-toastr";

const Icon = ({ type }) =>
  type === "success" ? (
    <SuccesToastIcon className="toastr_icon" />
  ) : (
    <ErrorToastIcon className="toastr_icon" />
  );

const toastr = {
  clear: clear,
  success: success,
  error: error,
};

const notify = (
  type,
  title,
  timeout = 1000,
  closeOnClick = true,
  centerPosition = false
) => {
  return toast(
    <>
      <IconWrapper>
        <Icon type={type}></Icon>
      </IconWrapper>
      <StyledDiv>
        {title && <Text className="toast-title">{title}</Text>}
      </StyledDiv>
    </>,
    {
      type: type,
      autoClose: (timeout > 750 && timeout) || 5000, //timeout === 0 ? false : timeout < 750 ? 5000 : timeout || 5000,
      position: centerPosition && toast.POSITION.TOP_CENTER,
    }
  );
};

function success(title, timeout, centerPosition) {
  return notify("success", title, timeout, centerPosition);
}

function error(title, timeout, centerPosition) {
  return notify("error", title, timeout, centerPosition);
}

function clear() {
  return toast.dismiss();
}

export default toastr;
