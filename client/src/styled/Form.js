import styled from "styled-components";

export const StyledFormBox = styled.div`
  margin-top: 180px;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50vw;
  z-index: 1;
  background: transparent;
  @media screen and ${props => props.theme.media.tablet} {
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and ${props => props.theme.media.phone} {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }
`

export const StyledFormHead = styled.h1`
  font-weight: 400;
  font-size: 40px;
  color: #3E3E3E;
  background: transparent;
`

export const StyledForm = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 550px;
  border-radius: 10px;
  gap: 8px;
  background: transparent;
  @media ${props => props.theme.media.tablet} {
    width: 100%;
  }
`

export const StyledInput = styled.input`
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  height: 93px;
  font-weight: 400;
  padding-left: 28px;
  font-size: 18px;

  &::placeholder {
    color: #2D2D2D;
  }
`

export const StyledTextarea = styled.input`
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  height: 190px;
  padding-left: 28px;
  font-size: 18px;

  &::placeholder {
    color: #2D2D2D;
  }
`

export const StyledSubmit = styled.button`
  border: none;
  font-size: 18px;
  color: #FFFFFF;
  width: 220px;
  height: 70px;
  background: #FAD34F;
  border-radius: 500px;
  margin-top: 25px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #2D2D2D;
  }

  @media screen and ${props => props.theme.media.phone} {
    width: 100%;
  }
`

export const StyledError = styled.div`
  color: #FFFFFF;
  background-color: red;
  border-radius: 10px;
  padding-left: 28px;
  padding-top: 18px;
  padding-bottom: 18px;
  font-size: 18px;
  font-weight: 600;
`
