// import { API_BASE_URL } from '../config';

// export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
// export const registerUserSuccess = (userId, token) => ({
//   type: REGISTER_USER_SUCCESS,
//   userId,
//   token
// });

// export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
// export const loginUserSuccess = (userId, token) => ({
//   type: LOGIN_USER_SUCCESS,
//   userId,
//   token
// });

// export const registerUser = (username, password) => {
//     return (dispatch) => {
//       fetch(`${API_BASE_URL}/auth/register`, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           username,
//           password
//         })
//       })
//       .then(response => response.json())
//       .then(json => window.location = '/login')
//       .catch(err => console.log(err))
//     }
// };