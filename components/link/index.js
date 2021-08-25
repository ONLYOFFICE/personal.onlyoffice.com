import React from "react";
import PropTypes from "prop-types";
import StyledLink from "./styled-link";

const CustomLink = ({
  children,
  href,
  style,
  className,
  type,
  label,
  ...rest
}) => {

  const linkClassName = className
    ? className + " external-link"
    : "external-link";

  return (
    <StyledLink
      as="a"
      href={href}
      {...rest}
      style={style}
      className={linkClassName}
    >
      {children || label}
    </StyledLink>
  );
};

CustomLink.propTypes = {
  /**  link text */
  label: PropTypes.string,
  /**  link text color */
  color: PropTypes.string,
  /**  link text font-size */
  fontSize: PropTypes.string,
  /**  link text font-weight */
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**  link text text-transform*/
  textTransform: PropTypes.string,
  /** Used as HTML 'href' property */
  href: PropTypes.string,
  /** Used as HTML 'title' property */
  title: PropTypes.string,
  /**  link text-decoration */
  textDecoration: PropTypes.string,
  /**  link hover text-decoration  */
  hoverTextDecoration: PropTypes.string,
  /** What the  link will trigger when clicked */
  onClick: PropTypes.func,
  /**  link tab index */
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

CustomLink.defaultProps = {
  label: "",
  fontSize: "14px",
  href: undefined,
  title: undefined,
  rel: "noopener noreferrer",
  tabIndex: -1,
  target: "_blank",
};

export default CustomLink;
