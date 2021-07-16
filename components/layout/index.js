import React from "react";

class Layout extends React.Component {
  render() {
    return <>{this.props.children}</>;
  }
}

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
