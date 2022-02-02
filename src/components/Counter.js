import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    //when both of these are used...the first returns 0, and the second returns 1
    // setCount(count + 1); //=>0
    // setCount(count + 1); //=>1

    // When using the callback version of setCount, React will pass in the current value of count before updating it. Now our code works as intended and updates count by 2 when the button is clicked.

    // As a rule of thumb, any time you need to set state based on the current value of state, you should use the callback syntax.
    // using the React's recommended best practice where next state evaluation depends on the previous state
    setCount(count => count + 1);
  
  }

  // calls to render the button.  button has a onClick event attribute that passes a callback fn as the props.  the callback is the `increment` fn, which handles the incremental counter. and then, the component is re-rendered
  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;

//You can visualize the steps that happen when we call setCount like this:

// Calling setCount(1) tells React that its internal state for our Counter component's count value must update to 1
// React updates its internal state
// React re-renders the Counter component
// When the Counter component is re-rendered, useState will return the current value of React's internal state, which is now 1
// The value of count is now 1 within our Counter component
// Our component's JSX uses this new value to display the number 1 within the button




//Because setState is asynchronous — i.e., because the value of count isn't updated immediately — when setCount is called the second time, count is still equal to 0! As a result, we are effectively calling setCount(1) in both cases.

