import React from "react";
import { createGlobalStyle } from "styled-components";

import ErrorBoundary from "../error-boundary";

import StyledLayout from "./styled-layout";
import Header from "./sub-components/header";
import Main from "./sub-components/main";
import Footer from "./sub-components/footer";
import Head from "./sub-components/head";
import Background from "./sub-components/background";
import Toast from "../toast";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    font-family: "Open Sans", sans-serif;
    scrollbar-color: #c1c1c1c1 transparent;
    scrollbar-width: thin;
    overflow-x: hidden;
  }

  html::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  html::-webkit-scrollbar-thumb {
    width: 5px;
    height: 245px;

    background: #c1c1c1c1;
    opacity: 0.2;
    border-radius: 6px;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    position: relative;
  }
`;

function PageHead() {
  return null;
}
PageHead.displayName = "PageHead";

function PageHeader() {
  return null;
}
PageHeader.displayName = "PageHeader";

function SectionMain() {
  return null;
}
SectionMain.displayName = "SectionMain";

function PageFooter() {
  return null;
}
PageFooter.displayName = "PageFooter";
class Layout extends React.Component {
  static PageHeader = PageHeader;
  static SectionMain = SectionMain;
  static PageFooter = PageFooter;
  static PageHead = PageHead;

  render() {
    const { children } = this.props;
    let headerContent = null;
    let mainContent = null;
    let footerContent = null;
    let headContent = null;

    React.Children.forEach(children, (child) => {
      const childType =
        child && child.type && (child.type.displayName || child.type.name);

      switch (childType) {
        case PageHead.displayName:
          headContent = child;
          break;
        case PageHeader.displayName:
          headerContent = child;
          break;
        case SectionMain.displayName:
          mainContent = child;
          break;
        case PageFooter.displayName:
          footerContent = child;
          break;
        default:
          break;
      }
    });

    return (
      <ErrorBoundary t={this.props.t}>
        <GlobalStyles />
        <StyledLayout id="page-layout" className="layout notranslate">
          <Background />
          {children}
          <Head>{headContent ? headContent.props.children : null}</Head>

          <Header>{headerContent ? headerContent.props.children : null}</Header>
          <Main>{mainContent ? mainContent.props.children : null}</Main>
          <Footer
            className="footer"
            isHomePage={footerContent.props.isHomePage}
          >
            {footerContent ? footerContent.props.children : null}
          </Footer>

          <Toast />
        </StyledLayout>
      </ErrorBoundary>
    );
  }
}

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
