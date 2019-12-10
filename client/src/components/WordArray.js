import React from 'react';

const WordArray = () => {

  const [words, setWords] = React.useState([]);

  const dogArray = words.map(word => word + ",");

  return (
    <>
      <h1 className="mt-3">Dog Array</h1>
        <div>
          {words.length ? dogArray : ""}
        </div>
      <span>
        <button id="addToArray" className="btn btn-outline-light border border-info mr-1" type="button" onClick={() => setWords([...words, 'dog'])}>AddToArray</button>
        <button id="clearArray" className="btn btn-outline-light border border-info ml-1" type="button" onClick={() => setWords([])}>clearArray</button>
      </span>
    </>
  );
};

export default WordArray;