import { GET_USERS, GET_PROFILE } from '../types';

// en este reducer pásamos los datos al state despues que los traemos del api

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state, action ) => {
    
    const { payload, type } = action;

    switch ( type ) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
            };
        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload,
            };
        default:
            return state;
    }
};