import React, { useState, useEffect } from 'react';
import Portal from "../portal";
import Text from "../text";
import CookieMess from "./styled-toast";
import Button from '../button';
import Link from "../link";


const Toast = (props) => {

    const [display, setDisplay] = useState(true);
    const {t}= props;
    const cookiesName ="onlyoffice_personal_cookie"
    const cookie = "onlyoffice_personal_cookie=true";

    const getCookie = (name) => { 
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
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
                    >
                        {t("This website uses cookies. By continuing to browse the website you agree to our ")}
                        <Link
                        href={"https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.239950403.1196593722.1525950411-169631771.1404734630"}
                        label={"privacy policy"}
                        color={"#ff6f3d"}
                        fontSize={"12px"}
                        hoverTextDecoration={"none"}
                        ></Link>
                    </Text>
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