import { GETUSERDATA } from "../Type/Index"

const defaultState = {
    userArr :[],
}

export const UserReducer = (state= defaultState,action)=> {
    switch (action.type) {
        case GETUSERDATA:
            
            return {
                userArr : action.data,
            }
    
        default:
            return state
    }
}