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

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child",key:'child1' }, [
    React.createElement("h1", { id: "heading", key: "h1a" }, "Hello World from React"),
    React.createElement("h1", {key: "h1b"}, "Welcome to React"),
  ]),React.createElement("div", { id: "child2" ,key:'child2'}, [
    React.createElement("h1", { id: "heading" ,key: "h2a"}, "Hello World from React"),
    React.createElement("h1", {key: "h2b"}, "Welcome to React"),
  ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement("div", { id: "child", key: "child1" }, [
//       React.createElement("h1", { className: "heading", key: "h1a" }, "Hello World from React"),
//       React.createElement("h2", { key: "h2a" }, "Welcome to React"),
//     ]),
//     React.createElement("div", { id: "child2", key: "child2" }, [
//       React.createElement("h1", { className: "heading", key: "h1b" }, "Hello World from React"),
//       React.createElement("h2", { key: "h2b" }, "Welcome to React"),
//     ])
//   ]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
