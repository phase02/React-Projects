import React, { useReducer, useState, useEffect } from 'react';
import reducer from './Reducer';

const defaultState = {
    people: [],
    count: 0
}

const PeopleTab = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    useEffect(() => {
        console.log("Mount");
        return () => {
            console.log("Unmount");
        };
    }, []);

    const addPeople = () => {
        if (name) {
            dispatch({ type: 'ADD', item: { id: state.people.length + 1, name: name } });
        }
        setName('');
    }

    const removePeople = (person) => {
        dispatch({ type: 'REMOVE', item: person });
    }

    return <>
        <form>
            <input type="input" value={name} onChange={(e) => setName(e.target.value)} />
            <button type="button" onClick={() => addPeople()}>Add</button>
        </form>
        {state.people.map((person) => (
            <form className="flex">
                <h4>{person.name}</h4>
                <button type="button" onClick={() => removePeople(person)}>Remove Person</button>
            </form>
        ))}

    </>;
}

export default PeopleTab;