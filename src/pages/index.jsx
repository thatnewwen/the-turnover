import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Layout, Listing, Wrapper, Title } from "../components";
import CategorySection from "../components/CategorySection";
import logo from "../styles/images/to.png";

const Hero = styled.header`
  background-color: ${(props) => props.theme.colors.greyLight};
  display: flex;
  align-items: center;
`;

const HeroInner = styled(Wrapper)`
  padding-top: 6rem;
  padding-bottom: 6rem;
  min-height: 100vh;
  .logo {
    max-width: 250px;
    padding-bottom: 60px;
  }
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding-top: 8rem;
    padding-bottom: 8rem;
    padding-left: 5rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    padding-top: 6rem;
    padding-bottom: 6rem;
    padding-left: 5rem;
  }
`;

const HeroText = styled.div`
  font-size: 1.7rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
  }
`;

const Social = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  font-family: "Source Sans Pro", -apple-system, "BlinkMacSystemFont",
    "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  li {
    display: inline;
    &:not([data-name="social-entry-0"]) {
      margin-left: 2.5rem;
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        margin-left: 1.75rem;
      }
    }
    a {
      font-style: normal;
      color: ${(props) => props.theme.colors.greyDark};
      font-size: 1.333rem;
      font-weight: 600;
      &:hover,
      &:focus {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;
      }
      @media (max-width: ${(props) => props.theme.breakpoints.s}) {
        font-size: 1.2rem;
      }
    }
  }
`;

const IndexWrapper = Wrapper.withComponent("main");

class Index extends Component {
  render() {
    const {
      data: { homepage, social, posts, categories },
    } = this.props;
    return (
      <Layout>
        <Hero>
          <HeroInner>
            <img className="logo" src={logo} alt="Logo" />
            <CategorySection categories={categories.nodes}></CategorySection>
            {/* <Listing posts={posts.nodes} /> */}
          </HeroInner>
        </Hero>
      </Layout>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    homepage: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.shape({
          text: PropTypes.string.isRequired,
        }),
        content: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }),
      }),
    }),
    social: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
    categories: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
    social: allPrismicHeroLinksBodyLinkItem {
      nodes {
        primary {
          label {
            text
          }
          link {
            url
          }
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      nodes {
        uid
        data {
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            category {
              document {
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
    categories: allPrismicCategory {
      nodes {
        id
        data {
          name
          summary {
            html
          }
        }
      }
    }
  }
`;
