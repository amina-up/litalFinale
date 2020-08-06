import {GET_ALL_USERS,GET_NUMBER_USERS} from '../actions/types'
const initState=[]

export const usersReducer=(state=initState,action)=>{
    if(action.type===GET_ALL_USERS)
    return action.payload
    return state
}
export const NumberusersReducer=(state=[],action)=>{
    if(action.type===GET_NUMBER_USERS)
    return action.payload
    return state
}
