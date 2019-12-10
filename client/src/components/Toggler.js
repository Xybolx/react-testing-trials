import React from 'react';
import logo from '../logo.svg';

const Toggler = () => {
  const [toggleState, setToggleState] = React.useState(false);

  return (
    <>
    <img src={toggleState ? "logo512.png" : logo} className="App-logo mt-3" alt="logo" />
    <h1>Toggle Icon</h1>
    <span>
      <button id="toggle" className="btn btn-outline-light border border-info" type="button" onClick={() => setToggleState(!toggleState)}>{ toggleState ? "Large" : "Small" }</button>
    </span>
    </>
  );
}

export default Toggler;