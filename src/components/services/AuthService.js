import axios from 'axios'


const AUTH_REST_API_URL = 'http://localhost:8080/api/auth/register'
const LOGIN_REST_API_URL = 'http://localhost:8080/api/auth'

export const registerUser = (registerObj) => axios.post(BASE_REST_API_URL,registerObj);
export const loginUser = (usernameOrEmail,password)=>axios.post(LOGIN_REST_API_URL+'/login',{usernameOrEmail,password});

//fuctions to allow data display on page
export const storeToken  = (token)=>localStorage.setItem("token",token);
export const getToken = ()=>localStorage.getItem("token");