import {combineReducers} from 'redux'
import {usersReducer,NumberusersReducer} from "./reducersAdmin"
import {articlesReducer,ab} from './reducersArticles'
import {historiqueReducer} from './reducerHistorique'
import {userExistReducer} from './userExist'
import {AdminExistReducer} from './admin'



 const allReducers =combineReducers({
    users:usersReducer,
    nbrUsers:NumberusersReducer,
    articles:articlesReducer,
    historique:historiqueReducer,
    userExist:userExistReducer,
    admin:AdminExistReducer


})
export default allReducers