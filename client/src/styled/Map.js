import styled from "styled-components";

export const StyledMapBox = styled.div`
  width: 50vw;
  height: 930px;
  position: relative;
  z-index: 0;
  @media screen and ${props => props.theme.media.tablet} {
    width: 100%;
    height: 500px;
  }
  @media screen and ${props => props.theme.media.phone} {
    height: 300px;
  }
`

export const StyledMap = styled.img`
  border-radius: 50% 0 0 50%;
  position: absolute;
  top: 0;
  right: 0;
  @media screen and ${props => props.theme.media.tablet} {
    position: relative;
    display: flex;
    border-radius: 50%;
    object-fit: cover;
    height: 500px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and ${props => props.theme.media.phone} {
    width: 300px;
    height: 300px;
  }
`

export const StyledGoodie = styled.img`
  position: absolute;
  background: transparent;
  top: 543px;
  right: 550px;
  z-index: 2;
  @media screen and ${props => props.theme.media.tablet} {
    display: none;
  }
`

export const StyledCartoon1 = styled.img`
  position: absolute;
  background: transparent;
  top: 580px;
  right: 370px;
  @media screen and ${props => props.theme.media.tablet} {
    display: none;
  }
`
