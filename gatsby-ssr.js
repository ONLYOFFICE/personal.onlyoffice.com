import React from "react";

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      type="module"
      key="sw-registration"
      src="/site-assets/sw-helper.js"
      async
    />,
  ]);
};
