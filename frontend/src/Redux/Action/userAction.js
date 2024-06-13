import axios from "axios"
import { GETUSERDATA } from "../Type/Index"

export const GetUserData = ()=> {
    return (dispatch) => {
        axios.get("http://localhost:7000/api/user")
            .then(res => {
                dispatch({
                    type: GETUSERDATA,
                    data: res.data.data,
                    error: null 
                });
            })
            .catch(error => {
                dispatch({
                    type: GETUSERDATA,
                    data: null, 
                    error: error.response.data 
                });
            });
    };
}

export const addUserData = (obj)=> {
    return (dispatch) => {
        console.log(obj);
        axios.post("http://localhost:7000/api/user",obj)
            .then(res => {
                
                dispatch(GetUserData())
            })
            .catch(error => {
                dispatch({
                    type: GETUSERDATA,
                    data: null, 
                    error: error.response.data 
                });
            });
    };
}
export const DeleteUser = (id)=> {
    return (dispatch) => {
        axios.delete("http://localhost:7000/api/user/"+id)
            .then(res => {
                console.log(res.data);
                dispatch(GetUserData())
            })
            .catch(error => {
                dispatch({
                    type: GETUSERDATA,
                    data: null, 
                    error: error.response.data 
                });
            });
    };
}
export const UpdateUser = (id,obj)=> {
    return (dispatch) => {
        axios.patch("http://localhost:7000/api/user/"+id,obj)
            .then(res => {
                console.log(res.data);
                dispatch(GetUserData())
            })
            .catch(error => {
                dispatch({
                    type: GETUSERDATA,
                    data: null, 
                    error: error.response.data 
                });
            });
    };
}