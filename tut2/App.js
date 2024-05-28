import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const head = React.createElement(
    "h1",
    { id:"heading"},
    "ok this should work");
//creating a nested structure like this 
/* <div>
    <div>
        <h1>
        </h1>
    </div>
</div> */
    const parent = React.createElement(//   <<----this is not a html tag it is a REACT ELEMENT or REACT OBJECT
        "div",//name of the element you are creating  
        {id:"parent"},// Attributes if you want to give any 
        React.createElement( // this represents the child of the element {this can further be nested }
            "div",
            {id:"child"},[
            //React.createElement("h1",{},"the nested structure is created")
            //insted of giving only one child you can give an ARRAY of children if you want to create siblings for eg :
            React.createElement("h1",{},"this is hulululu "),
            React.createElement("h2",{},"this is h2"),
            React.createElement("h3",{},"this is h3")]
        )
    
    )
    root.render(parent);
    // this is where the react element gets converted to a html <tag> 

