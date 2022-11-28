import axios from 'axios'
import { authFetching, authSuccess, authFail } from '../context/AuthContext/AuthAction'

export const loginCall = async (dispatch, userCreds) => {
    dispatch(authFetching())
    try {
        const res = await axios.post("/auth/login", userCreds)
        dispatch(authSuccess(res.data))
    }catch(err){
        dispatch(authFail(err))
    }
}