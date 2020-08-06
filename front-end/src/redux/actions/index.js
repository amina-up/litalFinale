import {GET_ALL_USERS,GET_NUMBER_USERS,GET_ALL_ARTICLES,GET_HISTORIQUE,GET_USEREXIST} from "./types"
export const getAllUsers=(payload)=>({
    type:GET_ALL_USERS,
    payload
})

export const getAllArticles=(payload)=>({
    type:GET_ALL_ARTICLES,
    payload
})
export const NumberUsers=(payload)=>({
    type:GET_NUMBER_USERS,
    payload
})

export const getHistorique=(payload)=>({
    type:GET_HISTORIQUE,
    payload
})

export const getExistUsers=(payload)=>({
    type:GET_USEREXIST,
    payload
})

export const getAdmin=(payload)=>({
    type:"GET_ADMIN",
    payload
})



