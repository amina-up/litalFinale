
const initState=[]
export const AdminExistReducer=(state=initState,action)=>{
if(action.type==="GET_ADMIN"){
    return action.payload
}
else return state
}