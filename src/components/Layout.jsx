/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import "@reach/skip-nav/styles.css";

import Footer from "./Footer";
import SEO from "./SEO";
import SkipNavLink from "./SkipNavLink";
import Sidebar from "./Sidebar";
import { theme, reset } from "../styles";

import "typeface-lora";
import "typeface-source-sans-pro";
import { Link } from "gatsby";
import tower from "../styles/images/tower.png";

const globalStyle = css`
  ${reset}
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.primary};
    font-family: "Inter";
    text-transform: uppercase;
    font-weight: 800;
    font-style: italic;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.bg};
    font-family: "Inter";
    font-size: 14px;
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.primary};
  }
  a {
    color: ${theme.colors.primary};
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    font-weight: 700;
    font-style: italic;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  @media (max-width: ${theme.breakpoints.m}) {
    html {
      font-size: 12px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 2.369rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
  font-style: normal;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 12px;
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 50px;
  right: 70px;

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    top: 20px;
    right: 20px;
    position: relative;
    text-align: right;
  }
`;

const Tower = styled.div`
  position: fixed;
  bottom: 0;
  right: 50px;
  .tower {
    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      display: none;
    }
  }

  img {
    width: 100px;
  }
`;

const PureLayout = ({ children, data, customSEO }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyle} />
      <SkipNavLink />
      <Sidebar>
        <StyledLink to="/">
          <h1>{data.prismicHomepage.data.title.text}</h1>
        </StyledLink>
      </Sidebar>
      <Menu>
        <StyledLink to="https://instagram.com/theturnover.club">
          Instagram
        </StyledLink>{" "}
        —{" "}
        <StyledLink to="https://twitter.com/theturnover23">Twitter</StyledLink>
      </Menu>
      <StyledLink to="https://open.spotify.com/show/28saIL7duK3UhbUx5eUChV?si=sfCMY1qDRQi5pcH2_m7zXA">
        <Tower>
          <img className="tower" src={tower} alt="Tower" />
        </Tower>
      </StyledLink>
      {!customSEO && <SEO />}
      {children}
    </>
  </ThemeProvider>
);

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            prismicHomepage {
              data {
                title {
                  text
                }
                content {
                  html
                }
              }
            }
          }
        `}
        render={(data) => (
          <PureLayout {...this.props} data={data}>
            {this.props.children}
          </PureLayout>
        )}
      />
    );
  }
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  data: PropTypes.object.isRequired,
  customSEO: PropTypes.bool,
};

PureLayout.defaultProps = {
  customSEO: false,
};
