import React, {useState} from "react";
import PropTypes from "prop-types";
import {StyledInfoPanel, StyledInfoPanelText, StyledInfoPanelImg,StyledGroupButton} from "./styled-info-panel";
import Text from "../text/index";
import Button from "../button/index";

const InfoPanel = (props) => {
  console.log(props);
  const [errorLaodSrc, setErrorLaodSrc] = useState(true);
  
  const onError = (e) => { 
    if(errorLaodSrc) { 
      setErrorLaodSrc(errorLaodSrc);
        e.target.src = props.defaultImgUrl;
    }
  };

 
  
  if(props.imgleft){
    return(
      <StyledInfoPanel
      bgColor={props.bgColor}
      >

        <StyledInfoPanelText>

          <Text 
          lineHeight={"28px"} 
          fontSize={"22px"} 
          color={props.textColor}
          textAlign={"center"}
          >
            {props.children}
          </Text>   

          <StyledGroupButton>
            {
              (props.countButton).map((btn) => 
                <Button
                  icon={btn.iconButton}
                  type={btn.typeButton}
                  label={btn.textButton}/>
              )
            }
              
            
            
          </StyledGroupButton>     

        </StyledInfoPanelText>

        <StyledInfoPanelImg>
          <img 
          src={props.imgUrl} 
          onError={onError}       
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


