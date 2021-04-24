import React from 'react';

const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'ADD':
            return { ...state, people: [...state.people, action.item] }; break;
        case 'REMOVE': return { ...state, people: state.people.filter((item) => item.id != action.item.id) }; break;
        default: return state;
    }
}

export default reducer;