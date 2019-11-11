import { ACTION_CHANGE_FIRSTNAME, ACTION_CHANGE_SECONDNAME } from '../../index';

const initialState = {
    firstName: 'XXX',
    secondName: 'YYY'
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_CHANGE_FIRSTNAME:
            return { ...state, firstName: action.payload };
        case ACTION_CHANGE_SECONDNAME:
            return { ...state, secondName: action.payload };
        default: 
            return state;
    }
};