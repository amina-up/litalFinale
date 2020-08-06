import {GET_HISTORIQUE} from '../actions/types'
const initState=[]

export const historiqueReducer=(state=initState,action)=>{
    if(action.type===GET_HISTORIQUE)
    return action.payload
    return state
}