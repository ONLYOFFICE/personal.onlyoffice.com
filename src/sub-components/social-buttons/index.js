import React, { useEffect, useState, useCallback, useRef } from "react";
import SocialButton from "../../../components/social-button";
import { getAuthProviders, thirdPartyLogin } from "../../api";
import toastr from "../../../components/toast/toastr";

import StyledSocialButtons from "./styled-social-buttons";
import {
  sendAnalytics,
  parseQueryParams,
  redirectToMainPage,
  removeOAuthKey,
} from "../../helpers";
import GoogleIcon from "../../../static/site-assets/social-icons/google.react.svg";
import FacebookIcon from "../../../static/site-assets/social-icons/facebook.react.svg";
import LinkedInIcon from "../../../static/site-assets/social-icons/linkedin.react.svg";

import config from "../../../config.json";

const { availableProviders } = config;

const SocialButtons = ({ t, isDisabled }) => {
  const [providers, setProviders] = useState();
  const [isLinuxDesktopEditor, setIsLinuxDesktopEditor] = useState(false);
  const googleButtonRef = useRef(null);

  const authCallback = useCallback(
    (profile) => {
      thirdPartyLogin(profile)
        .then(() => {
          redirectToMainPage();
        })
        .catch(() => {
          toastr.error(t("ProviderNotConnected"));
        })
        .finally(() => {
          removeOAuthKey();
        });
    },
    [t]
  );

  useEffect(() => {
    window.authCallback = authCallback;

    const profile = localStorage.getItem("profile");
    if (profile) return authCallback(profile);
  }, [authCallback]);

  useEffect(() => {
    const isDesktop = window["AscDesktopEditor"] !== undefined;
    const platform = navigator.userAgent;
    const linuxPlatform = /Linux/;

    setIsLinuxDesktopEditor(linuxPlatform.test(platform) && isDesktop);

    getAuthProviders(isDesktop)
      .then((providers) => {
        setProviders(providers);
      })
      .catch((err) => console.log(err));
  }, []);

  /* eslint-disable */
  useEffect(() => {
    const google = availableProviders.google.toLowerCase();
    const urlParams = parseQueryParams(window.location.search);

    if (urlParams?.from === google) {
      getAuthProviders().then((providers) => {
        const googleProvider = providers.find((p) => p.provider === google);
        loginWithSocial(google, googleProvider.url, true);
      });
    }
  }, []);
  /* eslint-enable */

  const getLoginLink = (token, code, isDesktopEditors) => {
    return `/login.ashx?p=${token}&code=${code}${
      isDesktopEditors ? "&desktop=true" : ""
    }`;
  };

  const getOAuthToken = (tokenGetterWin) => {
    return new Promise((resolve, reject) => {
      localStorage.removeItem("code");
      let interval = null;
      interval = setInterval(() => {
        try {
          const code = localStorage.getItem("code");

          if (code) {
            localStorage.removeItem("code");
            clearInterval(interval);
            resolve(code);
          } else if (tokenGetterWin && tokenGetterWin.closed) {
            clearInterval(interval);
            reject();
          }
        } catch (err) {
          console.log(err);
        }
      }, 500);
    });
  };

  const onSocialButtonClick = (e) => {
    if (isDisabled || providers.length <= 0) return false;
    const targetButton = e.target.closest(".social-button");
    if (!targetButton) toastr.error(t("SomethingWentWrong"));
    const providerName = targetButton.dataset.providername;
    const url = targetButton.dataset.url;

    loginWithSocial(providerName, url);
  };

  const loginWithSocial = (providerName, url, fromExtension) => {
    const isDesktop = window["AscDesktopEditor"] !== undefined || fromExtension;

    try {
      const tokenGetterWin = isDesktop
        ? (window.location.href = url)
        : window.open(
            url,
            "login",
            "width=800,height=500,status=no,toolbar=no,menubar=no,resizable=yes,scrollbars=no"
          );

      getOAuthToken(tokenGetterWin)
        .then((code) => {
          const token = window.btoa(
            JSON.stringify({
              auth: providerName,
              mode: "popup",
              callback: "authCallback",
            })
          );
          sendAnalytics("Personal_Portal_Register");
          tokenGetterWin.location.href = getLoginLink(token, code, isDesktop);
        })
        .catch((e) => console.log("authorization canceled"));
    } catch (err) {
      console.log(err);
    }
  };

  const getIconProps = (name) => {
    if (!name) return;
    const provider =
      providers &&
      providers.find(
        (item) => item.provider.toLowerCase() === name.toLowerCase()
      );

    if (!provider) return { isDisabled: true };

    const props = {
      dataUrl: provider?.url,
      dataProvidername: provider?.provider,
      onClick: onSocialButtonClick,
      isDisabled: isDisabled || !provider || providers.length <= 0,
    };

    return props;
  };

  const googleProps = getIconProps(availableProviders.google);
  const facebookProps = getIconProps(availableProviders.facebook);
  const linkedInProps = getIconProps(availableProviders.linkedIn);

  return (
    <StyledSocialButtons isLinuxDesktopEditor={isLinuxDesktopEditor}>
      {availableProviders.google && (
        <SocialButton
          className="social-button"
          iconName={availableProviders.google}
          iconComponent={
            <GoogleIcon className="social-button-img" size="max-content" />
          }
          {...googleProps}
          innerRef={googleButtonRef}
        />
      )}
      {availableProviders.facebook && (
        <SocialButton
          className="social-button"
          iconName={availableProviders.facebook}
          iconComponent={
            <FacebookIcon className="social-button-img" size="max-content" />
          }
          {...facebookProps}
        />
      )}
      {availableProviders.linkedIn && (
        <SocialButton
          className="social-button"
          iconName={availableProviders.linkedIn}
          iconComponent={
            <LinkedInIcon className="social-button-img" size="max-content" />
          }
          {...linkedInProps}
        />
      )}
    </StyledSocialButtons>
  );
};

export default SocialButtons;
