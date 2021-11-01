import React from "react";
import Link from "../../../components/internal-link";

const FormLink = ({ href, label, currentLanguage }) => {
  return (
    <Link
      fontSize="16px"
      href={
        currentLanguage === "en" ? `/${href}` : `/${currentLanguage}/${href}`
      }
      textDecoration="none"
      hoverTextDecoration="underline"
      type="internal"
      style={{ margin: "0 auto" }}
    >
      {label}
    </Link>
  );
};

export default FormLink;
