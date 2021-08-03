import React from "react";
import { Helmet } from "react-helmet";
import languages from "../../../languages";

const Head = (props) => {
  const { metaDescription, metaKeywords, title, metaDescriptionOg } = props;

  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta
        id="ctl00_MetaImageOG"
        property="og:image"
        content="https://static.onlyoffice.com/studio/tag/personal.11.5.3/skins/default/images/logo/fb_icon_325x325.jpg"
      />
      <meta property="og:type" content="website" />
      <meta id="ctl00_MetaTitleOG" property="og:title" content="ONLYOFFICE" />
      <meta
        id="ctl00_MetaDescriptionOG"
        property="og:description"
        content={metaDescriptionOg}
      />
      <meta
        id="ctl00_CanonicalURLOG"
        property="og:url"
        content="https://personal.onlyoffice.com"
      />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta>
      <meta id="ctl00_MetaKeywords" name="keywords" content={metaKeywords} />
      <meta name="description" content={metaDescription} />
      <link rel="manifest" href="static/manifest.json" />
      <link
        rel="alternate"
        type="application/atom+xml"
        title="Teamlab Portal"
        href="https://personal.onlyoffice.com/services/whatsnew/feed.ashx?c=Teamlab+Portal"
      />

      {languages.map((lng) => {
        const { key, shortKey } = lng;
        return (
          <link
            key={key}
            rel="alternate"
            href={
              "https://www.personal.onlyoffice.com/" + shortKey === "en"
                ? ""
                : shortKey
            }
          ></link>
        );
      })}
    </Helmet>
  );
};

export default Head;
