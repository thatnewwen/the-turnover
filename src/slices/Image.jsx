import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const Content = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  max-width: 700px;
  border: 10px double;
`;

const Image = ({ input }) => (
  <Content>
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
  </Content>
);

export default Image;

Image.propTypes = {
  input: PropTypes.object.isRequired,
};
