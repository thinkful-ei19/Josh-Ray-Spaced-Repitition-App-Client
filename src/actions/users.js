import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

// ORIGINAL CODE
// export const registerUser = user => dispatch => {
//     return fetch(`${API_BASE_URL}/users`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .catch(err => {
//             const {reason, message, location} = err;
//             if (reason === 'ValidationError') {
//                 // Convert ValidationErrors into SubmissionErrors for Redux Form
//                 return Promise.reject(
//                     new SubmissionError({
//                         [location]: message
//                     })
//                 );
//             }
//         });
// };


export const registerUser = (username, password) => dispatch => {
    return fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};