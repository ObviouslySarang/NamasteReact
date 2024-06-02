import React from "react";
import ReactDOM from "react-dom/client";
//component's name should start with uppercase Character { ALWAYS }
const element = <h2>This is a react element</h2>;
const Component = () => {
  return <div>
    {element}
    THIS IS A REACT COMPONENT</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component />); // we use < -----/> this syntaxwhile rendering any component
