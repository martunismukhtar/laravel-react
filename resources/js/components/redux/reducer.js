import {ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_CURRENT_USER, RESET_USER} from './actions';

import { todos, currentuser } from './states';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export let reducer = (state = initialState, action) => {
    let newtodos;
    switch(action.type) {
        case RESET_USER:
            state = initialState;
            
            break;
        case SET_CURRENT_USER:
            return {
                isAuthenticated: action.payload.auth,
                user: action.payload.user
            };
            break;
        case ADD_TODO:
            console.log(action)
//            newtodos = {...state};
//            newtodos = [state];    
//            newtodos.push(action.payload);
//            console.log(newtodos)
//            return newtodos;
//            return [...state, action.payload];
//            return {
//                isAuthenticated: !(action.payload),
//                user: action.payload
//            };
            break;
        case UPDATE_TODO:
            break;
        case DELETE_TODO:
            break;
        default:
            return state;
    }
};