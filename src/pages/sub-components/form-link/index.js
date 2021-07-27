import React from "react";
import Link from "../../../../components/link";

const FormLink = (props) => {
  const { href, label, currentLanguage } = props;
  return (
    <Link
      fontSize="16px"
      href={
        currentLanguage === "en" ? `/${href}` : `/${currentLanguage}/${href}`
      }
      label={label}
      textDecoration="none"
      hoverTextDecoration="underline"
      type="internal"
      style={{ margin: "0 auto" }}
    />
  );
};

export default FormLink;
