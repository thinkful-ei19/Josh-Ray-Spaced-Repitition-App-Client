import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    SUBMIT_ANSWER_FEEDBACK,
    SUBMIT_ANSWER_ERROR, 
    INCREMENT_CORRECT,
    INCREMENT_INCORRECT,
    //test action
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
    console.log(action);
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
    } else if(action.type === INCREMENT_CORRECT) {
        return Object.assign({}, state, {
            correct: state.correct + 1
        });
    } else if(action.type === INCREMENT_INCORRECT) {
        return Object.assign({}, state, {
            incorrect: state.incorrect + 1
        });
    }
    return state;
}
