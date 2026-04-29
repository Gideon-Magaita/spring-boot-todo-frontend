import axios from 'axios'


const AUTH_REST_API_URL = 'http://localhost:8080/api/auth/register'
const LOGIN_REST_API_URL = 'http://localhost:8080/api/auth/login'

export const registerUser = (registerObj) => axios.post(AUTH_REST_API_URL,registerObj);
<<<<<<< HEAD
export const loginUser = (usernameOrEmail,password)=>axios.post(LOGIN_REST_API_URL,{usernameOrEmail,password});
=======
export const loginUser = (usernameOrEmail,password)=>axios.post(LOGIN_REST_API_URL+'/login',{usernameOrEmail,password});
>>>>>>> ce42aa5e23b064d408199e3efc23917a0949026c

//fuctions to allow data display on page
export const storeToken  = (token)=>localStorage.setItem("token",token);
export const getToken = ()=>localStorage.getItem("token");