import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    SUBMIT_ANSWER_FEEDBACK,
    SUBMIT_ANSWER_ERROR
} from '../actions/questions';

const initialState = {
    data: null,
    feedback: null,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_QUESTIONS_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            error: null
        });
    } else if (action.type === FETCH_QUESTIONS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SUBMIT_ANSWER_FEEDBACK) {
        return Object.assign({}, state, {
            data: action.data
        });
    } else if (action.type === SUBMIT_ANSWER_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
}
