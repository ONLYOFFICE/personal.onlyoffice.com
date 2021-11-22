import React, { useEffect, useState, useCallback } from "react";
import SocialButton from "../../../components/social-button";
import { getAuthProviders, thirdPartyLogin } from "../../api";
import toastr from "../../../components/toast/toastr";

import StyledSocialButtons from "./styled-social-buttons";
import { PageTrack } from "../../helpers";
import GoogleIcon from "../../../static/site-assets/social-icons/google.react.svg";
import FacebookIcon from "../../../static/site-assets/social-icons/facebook.react.svg";
import LinkedInIcon from "../../../static/site-assets/social-icons/linkedin.react.svg";

import config from "../../../config.json";

const { availableProviders } = config;

const SocialButtons = ({ t, isDisabled }) => {
  const [providers, setProviders] = useState();

  const authCallback = useCallback(
    (profile) => {
      thirdPartyLogin(profile)
        .then(() => {
          const redirectPath = localStorage.getItem("redirectPath");
          if (redirectPath) localStorage.removeItem("redirectPath");
          window.location.href = redirectPath || "/";
        })
        .catch(() => {
          toastr.error(t("ProviderNotConnected"));
        })
        .finally(() => {
          localStorage.removeItem("profile");
          localStorage.removeItem("code");
        });
    },
    [t]
  );

  useEffect(() => {
    window.authCallback = authCallback;

    const profile = localStorage.getItem("profile");
    if (profile) return authCallback(profile);

    const isDesktop = window["AscDesktopEditor"] !== undefined;

    getAuthProviders(isDesktop)
      .then((providers) => {
        setProviders(providers);
      })
      .catch((err) => console.log(err));

    return () => {
      setProviders(null);
    };
  }, [authCallback]);

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
    const isDesktop = window["AscDesktopEditor"] !== undefined;

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
    <StyledSocialButtons>
      {availableProviders.google && (
        <SocialButton
          iconName={availableProviders.google}
          iconComponent={
            <GoogleIcon className="social-button-img" size="max-content" />
          }
          {...googleProps}
        />
      )}
      {availableProviders.facebook && (
        <SocialButton
          iconName={availableProviders.facebook}
          iconComponent={
            <FacebookIcon className="social-button-img" size="max-content" />
          }
          {...facebookProps}
        />
      )}
      {availableProviders.linkedIn && (
        <SocialButton
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
