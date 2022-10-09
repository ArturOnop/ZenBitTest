import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  @media screen and ${props => props.theme.media.tablet} {
    flex-direction: column;
    gap: 50px;
    margin-bottom: 50px;
  }
`