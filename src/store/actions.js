import { ACTION_CHANGE_FIRSTNAME, ACTION_CHANGE_SECONDNAME } from '../../index';

export const changeFirstName = (newFirstName) => {
    console.log(newFirstName);
    return {
        type: ACTION_CHANGE_FIRSTNAME,
        payload: newFirstName
    };
};

export const changeSecondName = (newSecondName) => {
    return {
        type: ACTION_CHANGE_SECONDNAME,
        payload: newSecondName
    };
};