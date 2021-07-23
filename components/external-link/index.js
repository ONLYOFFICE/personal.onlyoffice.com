import React from "react";
import PropTypes from "prop-types";
import StyledLink from "./styled-link";

const ExternalLink = ({ label, href, className, ...rest }) => {
  const linkClassName = className
    ? className + " external-link"
    : "external-link";
  return (
    <StyledLink href={href} {...rest} className={linkClassName}>
      {label}
    </StyledLink>
  );
};

ExternalLink.propTypes = {
  /** External link text */
  label: PropTypes.string,
  /** External link text color */
  color: PropTypes.string,
  /** External link text font-size */
  fontSize: PropTypes.string,
  /** External link text font-weight */
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** External link text text-transform*/
  textTransform: PropTypes.string,
  /** Used as HTML 'href' property */
  href: PropTypes.string,
  /** Used as HTML 'title' property */
  title: PropTypes.string,
  /** External link text-decoration */
  textDecoration: PropTypes.string,
  /** External link hover text-decoration  */
  hoverTextDecoration: PropTypes.string,
  /** What the External link will trigger when clicked */
  onClick: PropTypes.func,
  /** External link tab index */
  tabIndex: PropTypes.number,
  /** The target attribute specifies where the linked document will open when the link is clicked */
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  /** Attribute defines the relationship between a linked resource and the current document */
  rel: PropTypes.string,
  /** Accepts id */
  id: PropTypes.string,
  /** Accepts class */
  className: PropTypes.string,
};

ExternalLink.defaultProps = {
  label: "",
  fontSize: "14px",
  href: undefined,
  title: undefined,
  rel: "noopener noreferrer",
  tabIndex: -1,
};

export default ExternalLink;
