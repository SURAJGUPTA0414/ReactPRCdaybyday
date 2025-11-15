// const heading = React.createElement('h1',{id:'heading',class:'xyz'},'Hello World from React');

//nested structure


//   <div id="parent">
//     <div id="child">
//         <h1 id="heading">Hello World from React</h1>
//         <h2>Welcome to React</h2>
//     </div>
//     <div id="child2">
//         <h1 id="heading">Hello World from React</h1>
//         <h2>Welcome to React</h2>
//     </div>
// </div> 


const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React"),
    React.createElement("h1", {}, "Welcome to React"),
  ]),React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Hello World from React"),
    React.createElement("h1", {}, "Welcome to React"),
  ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
