import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledSidebar = styled.div`
  position: fixed;
  width: 60px;
  left: 0;
  top: 0;
  height: 100%;
  font-family: "Inter";

  h1 {
    transform: rotate(-90deg);
    font-size: 26px;
    position: fixed;
    bottom: 0px;
    left: 16px;
    transform-origin: top left;
    margin-bottom: 0;

    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      left: 14px;
    }
  }

  .rectangle {
    width: 20px;
    height: inherit;
    background: #542bff;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: 240px;
    border-radius: 0px;

    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      width: 21px;
      left: -1px;
      bottom: 267px;
    }
  }
`;

class Sidebar extends Component {
  render() {
    const { children } = this.props;
    return (
      <StyledSidebar>
        {children}
        <div class="rectangle"></div>
      </StyledSidebar>
    );
  }
}

export default Sidebar;

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
