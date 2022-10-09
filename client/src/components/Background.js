import styled from "styled-components";

const StyledBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const StyledCartoon5 = styled.img`
  position: absolute;
  background: transparent;
  top: 22px;
  left: 29px;
`

const Ellipse = styled.img`
  position: absolute;
  background: transparent;
  top: 22px;
  left: 730px;
  z-index: 1;
`

const Clouds = styled.img`
  position: absolute;
  background: transparent;
  top: 100px;
  left: 0;
  z-index: 1;
`

const Background = () => {
    return (
        <StyledBackground>
            <StyledCartoon5 src="images/cartoon5.png"/>
            <Ellipse src="images/ellipse.png"/>
            <Clouds src="images/clouds.png"/>
        </StyledBackground>
    );
};

export default Background;