import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const NEXT_QUESTION = 'NEXT_QUESTION';
export const nextQuestion = data => ({
    type: NEXT_QUESTION,
    data
});

export const NEXT_ERROR = 'NEXT_ERROR';
export const nextError = error => ({
    type: NEXT_ERROR,
    error
});

export const SUBMIT_ANSWER_FEEDBACK = 'SUBMIT_ANSWER_FEEDBACK';
export const submitAnswerFeedback = data => ({
    type: SUBMIT_ANSWER_FEEDBACK,
    data,
});

export const SUBMIT_ANSWER_ERROR = 'SUBMIT_ANSWER_ERROR';
export const submitAnswerError = error => ({
    type: SUBMIT_ANSWER_ERROR,
    error
});

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = data => ({
    type: FETCH_QUESTIONS_SUCCESS,
    data
});

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = error => ({
    type: FETCH_QUESTIONS_ERROR,
    error
});

// TEST ACTIONS ===============================================
export const CORRECT_ANSWER_SUCCESS = 'CORRECT_ANSWER_SUCCESS';
export const correctAnswerSuccess = correct => ({
    type: CORRECT_ANSWER_SUCCESS,
    correct
});

export const INCORRECT_ANSWER_SUCCESS = 'INCORRECT_ANSWER_SUCCESS';
export const incorrectAnswerSuccess = correct => ({
    type: INCORRECT_ANSWER_SUCCESS,
    correct
});

// ==========================================================

export const fetchQuestions = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/api/questions`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(fetchQuestionsSuccess(data)))
        .catch(err => {
            dispatch(fetchQuestionsError(err));
        });
};

export const submitAnswer = (value) => (dispatch, getState) => {
    console.log(value);
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/api/questions`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
            body: JSON.stringify({value}) 
    })
    .then(response => response.json())
    .then(data => dispatch(correctAnswerSuccess(data)))
    .catch(err => dispatch(incorrectAnswerSuccess(err)))
        // console.log(res);
        // return dispatch(submitAnswerFeedback(res));
    
};

