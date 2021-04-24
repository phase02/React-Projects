import React, { useEffect, useState, useCallback } from 'react';
import Greetings from './Greetings';

const Hello = () => {
    const [person, setPerson] = useState({ name: "pooja", id: 2, count: 0 });
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Hello Mount");
        console.log(count);
        return () => {
            console.log("Hello Unmount")
        }
    }, [count]);

    const setName = (target) => {
        console.log(" set Id");
        setPerson((prev) => ({ ...prev, name: target }));
    }

    const setCountAgain = useCallback(() => {
        console.log(count);
        setCount(count + 1);
    }, []);

    const increment = useCallback((target) => {
        console.log("set incremenet");
        setPerson((prev) => ({ ...prev, count: target + 1 }));
    }, [person]);

    return <div>
        <p>Hellooo </p>
        {/* <button onClick={() => setCountAgain()}> Count</button> */}
        <Greetings person={person} increment={increment} setName={setName} setCountAgain={setCountAgain} />
    </div >;
}
export default Hello;