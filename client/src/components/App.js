import Form from "./Form";
import Map from "./Map";
import Footer from "./Footer";
import Background from "./Background";
import {StyledWrapper} from "../styled/App";

const App = () => {
    return (
        <>
            <Background/>
            <StyledWrapper>
                <Form/>
                <Map/>
            </StyledWrapper>
            <Footer/>
        </>
    );
}

export default App;
