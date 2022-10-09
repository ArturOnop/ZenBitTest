import {StyledCartoon2, StyledCartoon3, StyledCartoon4, StyledFooterBox, StyledLinks} from "../styled/Footer";

const Footer = () => {
    return (
        <StyledFooterBox>
            <StyledCartoon4 src="images/cartoon4.png"/>
            <StyledLinks>
                <a href="#">
                    <img src="images/linkedin.png" alt="linkedin"/>
                </a>
                <a href="#">
                    <img src="images/twitter.png" alt="twitter"/>
                </a>
                <a href="#">
                    <img src="images/facebook.png" alt="facebook"/>
                </a>
                <a href="#">
                    <img src="images/pinterest.png" alt="pinterest"/>
                </a>
            </StyledLinks>
            <StyledCartoon3 src="images/cartoon3.png"/>
            <StyledCartoon2 src="images/cartoon2.png"/>
        </StyledFooterBox>
    );
};

export default Footer;