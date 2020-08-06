import {GET_USEREXIST} from "../actions/types"

const initState=[]
export const userExistReducer=(state=initState,action)=>{
if(action.type===GET_USEREXIST){
    return action.payload
}
else return state
}