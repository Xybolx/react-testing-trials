import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
    <h1 className="mt-3">The Count is {count}</h1>
    <span>
      <button id="count-up" className="btn btn-outline-light border border-info" type="button" onClick={() => setCount(count + 1)}>Count Up</button>
      <button id="count-down" className="btn btn-outline-light border border-info mx-2" type="button" onClick={() => setCount(count - 1)}>Count Down</button>
      <button id="zero-count" className="btn btn-outline-light border border-info" type="button" onClick={() => setCount(0)}>Zero</button>
    </span>
    </>
  );
}

export default Counter;