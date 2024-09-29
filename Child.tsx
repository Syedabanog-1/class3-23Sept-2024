
import React from 'react';

 const Child = ({name, age}:any) => {
  return (
    <div>
      <h1>Child Component</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <Child name="John" age={10} />;
    </div>
  );
};

// Example usage
//const App = () => {
 // return <Child name="John" age={10} />;
//};

export default Child;
