import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login } from "../../Api/Api";
const initialState={
    isLogin:false,
    loading:false,
    name:'',
    country:"",
    age:"",
    error:''
 }

export  const authAsyncThunk=createAsyncThunk(
    'auth/login',

   async (authData)=>{
        const data=await Login(authData.username,authData.password)
        return data;

    }
)
 export const AuthSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        Logout:(state)=>{
            state.isLogin=false
            state.loading=false
            state.name=''
            state.country=""
            state.age=""
            state.error=''
        }
    },

    extraReducers:(builder)=>{
        builder.addCase(authAsyncThunk.pending,(state,action)=>{
            state.loading=true

        })
        builder.addCase(authAsyncThunk.fulfilled,(state,action)=>{
            const {payload}=action
            state.isLogin=true
            state.loading=false
            state.name=payload.name
            state.age=payload.age
            state.country=payload.country

        })
        builder.addCase(authAsyncThunk.rejected,(state,action)=>{
            state.loading=false
            state.error='invalid username or paaword'
        })

    }
 })
 export const {Logout}=AuthSlice.actions;
 export default AuthSlice.reducer