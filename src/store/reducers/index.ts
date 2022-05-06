import { combineReducers } from 'redux';
import { users } from './users';



const rootReducer : any = combineReducers({  
    users,
});


export default rootReducer;