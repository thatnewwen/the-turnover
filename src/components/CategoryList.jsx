import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import website from "../../config/website";
import CategoryListItem from "./CategoryListItem";

const List = styled.ul`
  list-style-type: none;
  margin-left: 0;
  display: flex;
  flex-wrap: nowrap;
  width: 700px;
`;
const Content = styled.div`
  max-width: ${(props) => props.theme.maxWidthText};
`;

const CategorySectionContainer = styled.div`
  h2 {
    font-family: "Inter";
  }
`;

export default class CategoryList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <List>
        {posts.map((post) => {
          return <CategoryListItem key={post.post.uid} node={post.post} />;
        })}
      </List>
    );
  }
}

CategoryList.propTypes = {
  posts: PropTypes.array.isRequired,
};
