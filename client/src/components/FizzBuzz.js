import React from 'react';
import useFizzBuzz from '../customHooks/useFizzBuzz';

const FizzBuzz = () => {

    const fbArray = useFizzBuzz(100);

    console.log(fbArray);

    return (
        <div>{fbArray}</div>
    );
};

export default FizzBuzz;