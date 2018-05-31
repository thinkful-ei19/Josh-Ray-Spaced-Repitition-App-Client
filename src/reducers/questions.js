import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    SUBMIT_ANSWER_FEEDBACK,
    SUBMIT_ANSWER_ERROR, 
    //test actions
    CORRECT_ANSWER_SUCCESS,
    INCORRECT_ANSWER_SUCCESS
} from '../actions/questions';

const initialState = {
    data: null,
    error: null,
    correct: 0,
    incorrect: 0
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
    } else if(action.type === CORRECT_ANSWER_SUCCESS) {
        return Object.assign({}, state, {
            correct: true
        });
    } else if(action.type === INCORRECT_ANSWER_SUCCESS) {
        return Object.assign({}, state, {
            correct: false
        });
    }
    return state;
}
