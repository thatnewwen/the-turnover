import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Content = styled.div`
  max-width: ${(props) => props.theme.maxWidthText};
`;

const CategorySectionContainer = styled.div`
  h2 {
    font-family: "Inter";
  }
`;

class CategorySection extends Component {
  render() {
    const { categories } = this.props;
    return (
      <CategorySectionContainer>
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ", "}
            <h2>{cat.data.name}</h2>
            <Content
              dangerouslySetInnerHTML={{ __html: cat.data.summary.html }}
            />
            {/* <Link to={`/categories/${kebabCase(cat.data.name)}`}>
            </Link> */}
          </React.Fragment>
        ))}
      </CategorySectionContainer>
    );
  }
}

export default CategorySection;

CategorySection.propTypes = {
  categories: PropTypes.array.isRequired,
};
