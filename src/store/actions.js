import { ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME } from '../index';

export const ChangeFirstName = (newFirstName) => {
    return {
        type: ACTION_CHANGE_FIRST_NAME,
        payload: newFirstName
    };
};

export const ChangeSecondName = (newSecondName) => {
    return {
        type: ACTION_CHANGE_SECOND_NAME,
        payload: newSecondName
    };
};