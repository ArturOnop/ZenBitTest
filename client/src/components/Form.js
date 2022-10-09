import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearError, submitForm} from "../redux/submitFormActions";
import {
    StyledError,
    StyledForm,
    StyledFormBox,
    StyledFormHead,
    StyledInput,
    StyledSubmit,
    StyledTextarea
} from "../styled/Form";

const Form = () => {

    const formState = useSelector(state => state)
    const dispatch = useDispatch();

    const [state, setState] = useState({
        username: "",
        email: "",
        message: ""
    })

    const submit = () => {
        dispatch(clearError());
        dispatch(submitForm(state));
        setState({
            username: "",
            email: "",
            message: ""
        });
    }

    return (
        <StyledFormBox>
            <StyledFormHead>Reach out to us!</StyledFormHead>
            <StyledForm onSubmit={(e) => {
                submit();
                e.preventDefault()
            }}>
                {formState.error ?
                    <StyledError className="error">{formState.error}</StyledError> : null}
                <StyledInput type="text"
                             value={state.username}
                             placeholder="Your name*"
                             required
                             onChange={(event => setState(prevState => {
                                 return {...prevState, username: event.target.value}
                             }))}/>
                <StyledInput type="email"
                             value={state.email}
                             placeholder="Your e-mail*"
                             required
                             onChange={(event => setState(prevState => {
                                 return {...prevState, email: event.target.value}
                             }))}/>
                <StyledTextarea
                    value={state.message}
                    placeholder="Your message*"
                    required
                    onChange={(event => setState(prevState => {
                        return {...prevState, message: event.target.value}
                    }))}/>
                <StyledSubmit type="submit">Send message</StyledSubmit>
            </StyledForm>
        </StyledFormBox>
    );
};

export default Form;