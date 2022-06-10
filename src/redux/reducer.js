import { GET_CITIES } from './actions';

import {combineReducers} from 'redux';
const initialState = {
    name : 'Nangka',
    email : 'rahman.amarullah@gmail.com',
    city: [],
    other : {
        url : 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
}
const kotaState = {
    title : 'Salak',
    description : 'adalah bla bla bla',
}
const reducer1 = (state = initialState, action) => {
    switch (action.type) {
    }
    if (action.type === GET_CITIES) {
        alert('set city');
        return {
            ...state,
            name : "Jakarta",
            // city : action.payload,
            other : {
                url : 'adalah kota yang indah',
            }
        };
    }
    return state;
};

const reducerKota = (state = kotaState, action) => {
    return state;
}


const reducer = combineReducers({
    reducer1,
    reducerKota
});

export default reducer;