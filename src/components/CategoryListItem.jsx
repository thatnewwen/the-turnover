import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Item = styled.li`
  margin-bottom: 1.45rem;
  display: flex;
`;

const ItemDetails = styled.div`
  width: 700px;
  margin-left: 100px;
`;

const ReadMore = styled(Link)`
  margin-top: 20px;
  display: block;
  text-transform: uppercase;
  font-weight: bold;
`;

const Line = styled.div`
  background: ${(props) => props.theme.colors.primary};
  width: 200px !important;
  height: 1px;
  margin-left: 70px;
  margin-top: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    width: 50px !important;
  }
`;

const Headline = styled.p`
  font-family: "Source Sans Pro", -apple-system, "BlinkMacSystemFont",
    "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  color: ${(props) => props.theme.colors.grey};
  margin-bottom: 0;
  a {
    color: ${(props) => props.theme.colors.grey};
    font-style: normal;
    font-weight: normal;
  }
`;

const StyledLink = styled(Link)`
  font-size: 2.369rem;
  color: ${(props) => props.theme.colors.primary};
  font-style: normal;
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 1.777rem;
  }
`;

export default class CategoryListItem extends Component {
  render() {
    const { node } = this.props;
    console.log(node);
    return (
      <Item>
        <Line></Line>
        <ItemDetails>
          <StyledLink to={node.uid}>
            <h2>{node.document[0].data.title.text}</h2>
          </StyledLink>
          {node.document[0].data.description}
          <ReadMore to={node.uid}>Read More ➟</ReadMore>
        </ItemDetails>
      </Item>
    );
  }
}

CategoryListItem.propTypes = {
  node: PropTypes.object.isRequired,
};
