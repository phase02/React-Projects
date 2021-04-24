import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useForms } from './useForms';
import UseRefBasics from './UseRefBasics';
import { inferredPredicate } from '@babel/types';
import { Hello } from './Hello';

function App() {
  const [values, handleChange] = useForms({ email: '', password: '' });
  //const [showHello, setShowHello] = useState(true);
  //const [{ showHello, value }, setShowHello] = useState({ showHello: true, value: 'Hey ya' });

  //Everytime this component gets rerendered this method gets called.
  //You can manipulate or control the effect by which variable to use to "Effect" the render
  useEffect(() => {
    console.log("Mount");
  }, [values.email])

  return (
    <div>
      {/*<button onClick={() => setShowHello(!showHello)}>toggle</button>*/}
      {/* <button onClick={() => setShowHello(currentState => ({ ...currentState, showHello: !currentState.showHello }))}>toggle</button> */}
      {/* {showHello && <Hello />} */}
      <UseRefBasics />
      <input name="email" value={values.email} onChange={handleChange} />
      <input name="password" type="password" value={values.password} onChange={handleChange} />
    </div >
  );
}

export default App;
