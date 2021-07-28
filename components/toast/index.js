import React, { useState, useEffect } from 'react';
import Portal from "../portal";
import Text from "../text";
import CookieMess from "./styled-toast";
import Button from '../button';


const Toast = (props) => {

    const [display, setDisplay] = useState(true);

    const cookiesName ="onlyoffice_personal_cookie"
    const cookie = "onlyoffice_personal_cookie=true";

    const getCookie = (name) => { 
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");        
        if (parts.length == 2) {
            return true;            
        } else {
            return false;
        }        
    };

    const setCookiesHandler = () => {        
        document.cookie = cookie;
        setDisplay(!display);
    };

    useEffect(() => {       
        const cookie = getCookie(cookiesName);
        setDisplay(!cookie);
    });

    return (
        <Portal >
            <CookieMess display={display}>
                <div className = "cookieMess_container">
                    <Text
                    fontSize={"13px"}
                    display= {"block"}
                    >На этом сайте используются файлы cookie. Продолжая просмотр этого сайта, вы принимаете условия нашей <a target="_blank" href="$">политики конфиденциальности</a></Text>
                    <div className = "personalcookie">
                        <Button
                            label= {"Понятно"}
                            typeButton= {"transparent"}
                            fontSize= {"12px"}
                            display= {"block"}
                            height ={"41px"}                            
                            onClick = {setCookiesHandler}
                        >
                        </Button>
                    </div>
                </div>
            </CookieMess>
                
            
        </Portal>
        
    );
};

export default Toast;