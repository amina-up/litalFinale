import {GET_ALL_ARTICLES} from '../actions/types'
const initState=[]

export const articlesReducer=(state=initState,action)=>{
    if(action.type===GET_ALL_ARTICLES)
    return action.payload
    return state
}

