import {SUBMIT_FORM_FAILURE, CLEAR_ERROR} from "./submitFormTypes";

const initialState = {
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_FORM_FAILURE:
            return {
                error: action.payload
            }
        case CLEAR_ERROR:
            return initialState
        default:
            return state
    }
}

export default reducer;
