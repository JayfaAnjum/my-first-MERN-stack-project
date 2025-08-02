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
        }




    }
})


export const { loginRequest, loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;