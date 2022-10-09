import {StyledGoodie, StyledMap, StyledMapBox, StyledCartoon1} from "../styled/Map";

const Map = () => {
    return (
        <StyledMapBox>
            <StyledMap src="images/map.png"/>
            <StyledGoodie src="images/goodie1.png"/>
            <StyledCartoon1 src="images/cartoon1.png"/>
        </StyledMapBox>
    );
};

export default Map;