import axios from "axios";
import {SUBMIT_FORM_FAILURE, CLEAR_ERROR} from "./submitFormTypes";

export const submitFormFailure = error => {
    return {
        type: SUBMIT_FORM_FAILURE,
        payload: error
    }
}

export const clearError = () => {
    return {
        type: CLEAR_ERROR
    }
}

export const submitForm = user => {
    return (dispatch) => {
        axios.post(`https://zenbit-test-server.herokuapp.com/submit`, user, {
            headers: {"Content-Type": "application/json"}
        }).catch(error => {
            dispatch(submitFormFailure(error.message));
        });
    }
}
