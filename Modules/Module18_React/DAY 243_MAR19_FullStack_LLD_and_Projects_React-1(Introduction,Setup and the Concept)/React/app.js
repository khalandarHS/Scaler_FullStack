
/*<div id = "parent">
    <div id = "child">
        <h1 id = "greetings">Hello from React</h1>
        <h2 id = "greetings1">Hello from React2</h2>
    </div>
</div> */




//How to Replicate the above using react

const greeting = React.createElement('div',{id:"parent"},
    React.createElement('div',{id:"child"},
        [React.createElement('h1',{id:"greetings"},'Hello from React'),React.createElement('h2',{id:"greetings1"},'Hello from React2')]
    ));


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(greeting);