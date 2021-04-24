import React, { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
    const currentRef = useRef(null);
    useEffect(() => {
        console.log("Render");
    });

    useEffect(() => {
        console.log("Initial Load");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(currentRef.current.value);
    }

    return (
        <>

            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={currentRef} />
                    <button type="submit">submit</button>
                </div>
            </form>
        </>
    );
}

export default UseRefBasics;
