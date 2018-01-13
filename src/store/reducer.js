import * as actionTypes from './actions';

const initialState = {
    name: '',
    birthyear: '',
    invalidCredentials: false
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case action.type.LOGIN:
            return {     
                name: action.name,
                birthyear: action.birthyear,
                invalidCredentials: false
            }
        
        default:
            return state;
    }
    
}

export default reducer;