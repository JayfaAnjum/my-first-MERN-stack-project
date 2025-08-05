import {createSlice} from "@reduxjs/toolkit";

const authSlice=createSlice({

    name:"auth",
    initialState:{
        loading:false,
        isAuthenticated:false,
        user:null
    },

    reducers:{

        loginRequest(state,action){

            return{
                ...state,//it is used to get already assigned variable without change 
                loading:true,
                
            }
        },

        loginSuccess(state,action){

            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload.user
            }
        },

        loginFail(state,action){
            return{

                ...state,
                loading:false,
                error:action.payload
            }
        },

        registerRequest(state,action){
            return{

                ...state,
                loading:true
            }
        },
        registerSuccess(state,action){
            return{

                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload.user,

            }
        },
        registerFail(state,action){
            return{

                ...state,
                loading:false,
                isAuthenticated:false,
                error:error.payload
            }
        }






    }
})


export const { loginRequest, loginSuccess, loginFail,registerFail,registerSuccess,registerRequest } = authSlice.actions;
export default authSlice.reducer;