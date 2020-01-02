import React from 'react';

const WordArray = () => {

  const [words, setWords] = React.useState([]);

  const [options, setOptions] = React.useState([
    'dog',
    'cat',
    'mouse'
  ]);

  const dogArray = words && words.map((word, index) =>
  <div key={index}>
    {word + ","}
  </div>

  );

  return (
    <>
      <h1 className="mt-3">Dog Array</h1>
        <div>
          {words && words.length ? dogArray : ""}
        </div>
      <span>
        <button id="addToArray" className="btn btn-outline-light border border-info mr-1" onClick={() => setWords([...words, options[Math.floor((Math.random() * 3))]])}>AddToArray</button>
        <button id="clearArray" className="btn btn-outline-light border border-info ml-1" type="button" onClick={() => setWords([])}>clearArray</button>
      </span>
    </>
  );
};

export default WordArray;