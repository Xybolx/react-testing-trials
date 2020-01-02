import React from 'react';
import useFizzBuzz from '../customHooks/useFizzBuzz';

const FizzBuzz = () => {

const [rendered, setRendered] = React.useState(false);

React.useEffect(() => {
    setRendered(true);
}, []);

const fbArray = useFizzBuzz(200);

const mapFbArray = fbArray.map((arrayItem, index) => (
    <span className="list-item" key={index}>
        {arrayItem},
    </span>
));

    return (
        <div className="col-md-6 offset-md-3">
            <h2 id="fizzHeader">Using FizzBuzz</h2>
            <p className="list-unstyled">{mapFbArray}</p>
        </div>
    );
};

export default FizzBuzz;