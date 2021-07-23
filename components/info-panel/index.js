import React from "react";
import PropTypes from "prop-types";
import {StyledInfoPanel, StyledInfoPanelText, StyledInfoPanelImg} from "./styled-info-panel";
import Text from "../text/index";
import Button from "../button/index";

const InfoPanel = (props) => {
  const errorLaodSrc = useState(,);
  onError = () => {

  }
  if(props.imgleft){
    return(
      <StyledInfoPanel

      >
        <StyledInfoPanelText>

          <Text 
          lineHeight={"28px"} 
          fontSize={"22px"} 
          color={props.textColor}
          >
            {props.children}
          </Text>
          <Button></Button>

        </StyledInfoPanelText>

        <StyledInfoPanelImg>
          <img 
          src={props.imgUrl} 
          onError={this.onError}
          />         
        </StyledInfoPanelImg>        
        
      </StyledInfoPanel>
    )
  } else {
    return(
      <StyledInfoPanel>
        <StyledInfoPanelImg
          imgUrl={props.imgUrl}
        >          
        </StyledInfoPanelImg>
        <StyledInfoPanelText>         
          <Text 
          fontSize={props.fontSize} 
          color={props.textColor}
          lineHeight={props.lineHeight}
          >
            {props.children}
          </Text>
          <Button></Button>
        </StyledInfoPanelText>        
      </StyledInfoPanel>
    )
  } 
 
}

InfoPanel.propTypes = {};

InfoPanel.defaultProps = {};

export default InfoPanel;


