import styled from "styled-components";

export const StyledFooterBox = styled.div`
  height: 200px;
  width: 100%;
  background: #FAFAFA;
  border: 1px solid #D8D8D8;
  position: relative;
  @media screen and ${props => props.theme.media.phone} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }
`

export const StyledCartoon2 = styled.img`
  position: absolute;
  right: 0;
  background: transparent;
  @media screen and ${props => props.theme.media.phone} {
    display: none;
  }
`

export const StyledCartoon3 = styled.img`
  position: absolute;
  right: 130px;
  background: transparent;
  @media screen and ${props => props.theme.media.tablet} {
    display: none;
  }
`

export const StyledCartoon4 = styled.img`
  top: -37px;
  position: absolute;
  background: transparent;
  @media screen and ${props => props.theme.media.phone} {
    display: none;
  }
`

export const StyledLinks = styled.div`
  position: absolute;
  background: transparent;
  top: 89px;
  left: 340px;
  width: 130px;
  display: flex;
  justify-content: space-between;
  @media screen and ${props => props.theme.media.phone} {
    position: relative;
    top: auto;
    left: auto;
    width: 250px;
  }
`
