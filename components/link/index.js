import React from "react";
import PropTypes from "prop-types";
import StyledLink from "./styled-link";
import { Link } from "gatsby";

const CustomLink = ({ label, href, className, type, style, ...rest }) => {
  const linkClassName = className
    ? className + " external-link"
    : "external-link";

  return type === "external" ? (
    <StyledLink
      as="a"
      href={href}
      {...rest}
      style={style}
      className={linkClassName}
    >
      {label}
    </StyledLink>
  ) : (
    <Link to={href} style={style}>
      <StyledLink as="span" {...rest} className={linkClassName}>
        {label}
      </StyledLink>
    </Link>
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
  /** Type of Link */
  type: PropTypes.oneOf(["external", "internal"]),
};

CustomLink.defaultProps = {
  label: "",
  fontSize: "14px",
  href: undefined,
  title: undefined,
  rel: "noopener noreferrer",
  tabIndex: -1,
};

export default CustomLink;
