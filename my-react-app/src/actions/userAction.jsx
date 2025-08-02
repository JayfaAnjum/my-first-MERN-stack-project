import axios from 'axios';

import { loginRequest, loginSuccess, loginFail } from '../slice/authSlice';

export const login =(email,password) => async (dispatch)=>{

    try{
  dispatch(loginRequest());

        const {data}= await axios.post(`${import.meta.env.VITE_REACT_APP_URL1}/auth/login`,{email,password});
        dispatch(loginSuccess(data));
    }
            
 
 catch (error) {
  // Check if the error response exists and has data.message
  const message =
    error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : error.message || "Something went wrong";

  dispatch(loginFail(message));
}
}