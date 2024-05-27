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
    const parent = React.createElement(
        "div",//name of the element you are creating  
        {id:"parent"},// Attributes if you want to give any 
        React.createElement( // this represents the child of the element {this can further be nested }
            "div",
            {id:"child"},
            React.createElement(
                "h1",
                {},
                "the nested structure is created"
            )
        
        )
    
    )
    root.render(parent);

