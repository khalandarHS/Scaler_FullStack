import React,{Fragment, useState} from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);

    function Increment_Value () {
        count+=1;
        setCount(count);
    }
    function Decrement_Value () {
        count-=1;
        setCount(count);
    }

  return (
    <Fragment>
        <div>Counter</div>
        <div>The Count Value is {count}</div>
        <button onClick={Increment_Value}>Increment Count</button>
        <button onClick={Decrement_Value}>Decrement Count</button>

    </Fragment>
  );
};

export default Counter