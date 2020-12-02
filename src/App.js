// import "./App.css";
// import React, { useState } from "react";

// let initialState = [
//   {
//     name: "Image",
//     category: "obj",
//     height: "110px",
//   },
//   {
//     name: "Text",
//     category: "obj",
//   },
//   {
//     name: "Price",
//     category: "obj",
//   },
//   {
//     name: "Source Code",
//     category: "obj",
//   },
//   {
//     name: "Expiration Date",
//     category: "obj",
//   },
// ];

// function App() {
//   const [objs, setObjs] = useState(initialState);

//   let tasks = {
//     obj: [],
//     draw: [],
//   };
//   const onDragStart = (e, id) => {
//     console.log("DragStart:", id);

//     e.dataTransfer.setData("text", id);
//   };

//   objs.forEach((i) => {
//     tasks[i.category].push(
//       <div
//         key={i.name}
//         onDragStart={(e) => {
//           onDragStart(e, i.name);
//         }}
//         draggable
//         className="app__card"
//         style={{ height: i.height }}
//       >
//         {i.name}
//       </div>
//     );
//   });

//   const onDragOver = (e) => {
//     e.preventDefault();
//   };

//   const onDrop = (e, cat) => {
//     let id = e.dataTransfer.getData("text");
//     console.log("id:", id);
//     let objS = objs.filter((task) => {
//       if (task.name == id) {
//         task.category = cat;
//       }
//       return task;
//     });
//     console.log("ObjS", objS);
//     setObjs(objS);
//   };

//   return (
//     <div className="app">
//       <div className="app__main">
//         <div className="app__draw">
//           <h3 className="app__Title">Drawing Pallete</h3>
//           <div
//             className="app__drawDash"
//             onDragOver={(e) => onDragOver(e)}
//             onDrop={(e) => onDrop(e, "draw")}
//           >
//             {tasks.draw}
//           </div>
//         </div>
//         <div className="app__object">
//           <h3 className="app__Title">Design Objects Pallete </h3>
//           <div
//             className="app__objectDash"
//             // onDragOver={(e) => onDragOver(e)}
//             // onDrop={(e) => onDrop(e, "obj")}
//           >
//             {console.log("obj", tasks.obj)}
//             {tasks.obj}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React, { useState } from "react";
import DraggedItem from "./components/DraggedItem";

let Data = [
  {
    name: "Image",
    category: "obj",
    height: "110px",
  },
  {
    name: "Text",
    category: "obj",
  },
  {
    name: "Price",
    category: "obj",
  },
  {
    name: "Source Code",
    category: "obj",
  },
  {
    name: "Expiration Date",
    category: "obj",
  },
];

function App() {
  const [objs, setObjs] = useState([]);

  let tasks = {
    obj: [],
    draw: [],
  };
  const onDragStart = (e, task) => {
    console.log("som", task);

    setObjs((prevState) => [...prevState, task]);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="app">
      <div className="app__main">
        <div className="app__draw">
          <h3 className="app__Title">Drawing Pallete</h3>
          <div
            className="app__drawDash"
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e)}
          >
            {console.log("obj", objs)}
            {objs.map((task, index) => (
              <div key={index} draggable className="app__card">
                {task.name}
              </div>
            ))}
          </div>
        </div>
        <div className="app__object">
          <h3 className="app__Title">Design Objects Pallete </h3>
          <div className="app__objectDash">
            {Data.map((task, index) => (
              <div
                key={index}
                onDragStart={(e) => {
                  onDragStart(e, task);
                }}
                draggable
                className="app__card"
                style={{ height: task.height }}
              >
                {task.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <DraggedItem tasks={ objs}/>
    </div>
  );
}

export default App;
