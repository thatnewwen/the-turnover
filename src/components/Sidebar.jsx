import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledSidebar = styled.div`
  position: fixed;
  width: 60px;
  left: 0;
  top: 0;
  height: 100vh;
  font-family: "Inter";

  h1 {
    transform: rotate(-90deg);
    font-size: 26px;
    position: fixed;
    bottom: 85px;
    left: -72px;

    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      left: -82px;
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
