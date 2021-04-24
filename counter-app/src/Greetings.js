import React, { Component, useEffect } from 'react';

const Greetings = React.memo(({ person, increment, setName, setCountAgain }) => {
    useEffect(() => {
        console.log("Greetings mounted")
    }, []);
    return <><button onClick={() => increment(person.id)}>Increement</button>
        <button onClick={() => setCountAgain()}>Set Count</button>
    </>
});

export default Greetings;