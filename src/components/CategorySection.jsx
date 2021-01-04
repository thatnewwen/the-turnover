import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import CategoryList from "./CategoryList";

const Content = styled.div`
  max-width: ${(props) => props.theme.maxWidthText};
`;

const CategorySectionContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-left: 60px;
  padding-top: 6rem;
  padding-bottom: 6rem;
  height: 100vh;

  h2 {
    font-family: "Inter";
  }

  div {
    width: 700px;

    @media (max-width: ${(props) => props.theme.breakpoints.s}) {
      width: 70vw;
    }
  }
`;

export default class CategorySection extends Component {
  render() {
    const { categories } = this.props;
    return (
      <CategorySectionContainer>
        {categories.map((cat, i) => (
          <React.Fragment key={cat} className="categoryListContainer">
            {!!i && ", "}
            <div className="categoryDesc">
              <h2>{cat.data.name}</h2>
              <Content
                dangerouslySetInnerHTML={{ __html: cat.data.summary.html }}
              />
            </div>
            <CategoryList posts={cat.data.posts} />
            {/* <Link to={`/categories/${kebabCase(cat.data.name)}`}>
            </Link> */}
          </React.Fragment>
        ))}
      </CategorySectionContainer>
    );
  }
}

CategorySection.propTypes = {
  categories: PropTypes.array.isRequired,
};
