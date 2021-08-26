import { Scrollbars } from "react-custom-scrollbars";
import styled from "styled-components";
import { Base } from "../themes";

const StyledScrollbar = styled(Scrollbars)`
  .nav-thumb-vertical {
    background-color: ${(props) =>
      props.color
        ? props.color
        : props.theme.scrollbar.backgroundColorVertical};

    width: 5px !important;
    height: 245px !important;

    background: #333333 !important;
    opacity: 0.2 !important;
    border-radius: 6px !important;
  }
  .nav-thumb-horizontal {
    background-color: ${(props) =>
      props.color
        ? props.color
        : props.theme.scrollbar.backgroundColorHorizontal};

    width: 5px !important;
    height: 245px !important;

    background: #333333 !important;
    opacity: 0.2 !important;
    border-radius: 6px !important;
  }
`;

StyledScrollbar.defaultProps = {
  theme: Base,
};

export default StyledScrollbar;
