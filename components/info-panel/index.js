import React, {useState} from "react";
import PropTypes from "prop-types";
import {StyledInfoPanel, StyledInfoPanelText, StyledInfoPanelImg,StyledGroupButton} from "./styled-info-panel";
import Text from "../text/index";
import Button from "../button/index";
import Img from "./img";
const InfoPanel = ({bgColor, imgUrl, defaultImgUrl, ...rest}) => {


 
  
  if(rest.imgleft){
    return(
      <StyledInfoPanel
      bgColor={bgColor}
      >

        <StyledInfoPanelText>

          <Text 
          lineHeight={"28px"} 
          fontSize={"22px"} 
          color={rest.textColor}
          textAlign={"center"}
          >
            {rest.children}
          </Text>   

          <StyledGroupButton>
            {
              (rest.countButton).map((btn) => 
              <a href={btn.href}>
                <Button
                  icon={btn.iconButton}
                  type={btn.typeButton}
                  label={btn.textButton}
                />
               </a> 
              )
            }
              
            
            
          </StyledGroupButton>     

        </StyledInfoPanelText>

        <StyledInfoPanelImg>
          <Img            
            imgUrl={imgUrl} 
            defaultImgUrl={defaultImgUrl}
          />         
        </StyledInfoPanelImg>        
        
      </StyledInfoPanel>
    )
  } else {
    return(
      <StyledInfoPanel>
        <StyledInfoPanelImg
          imgUrl={rest.imgUrl}
        >          
        </StyledInfoPanelImg>
        <StyledInfoPanelText>         
          <Text 
          fontSize={rest.fontSize} 
          color={rest.textColor}
          lineHeight={rest.lineHeight}
          >
            {rest.children}
          </Text>
          <Button></Button>
        </StyledInfoPanelText>        
      </StyledInfoPanel>
    )
  } 
 
}

InfoPanel.propTypes = {};

InfoPanel.defaultrest = {};

export default InfoPanel;


