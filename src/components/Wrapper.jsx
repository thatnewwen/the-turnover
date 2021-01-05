import styled from "@emotion/styled";

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
  margin-left: 60px;
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    padding: 0 1.5rem;
    padding-left: 0rem;
  }
`;

export default Wrapper;
