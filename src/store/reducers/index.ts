import { combineReducers } from 'redux';
import { hobbies } from './hobbies';
import { users } from './users';



const rootReducer : any = combineReducers({  
    users,
    hobbies
});


export default rootReducer;