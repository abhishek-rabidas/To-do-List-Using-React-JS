import React from "react";

import List from "./list";

function InputBox() {
  //Using the React State to dynamically add and remove items without rendering again and again
  //Initializing the state with empty array
  //title is the array
  //setTitle is the method to dynamically manipulate the title array
  const [title, setTitle] = React.useState([]);

  function AddItem() {
    //storing the input value to the taskName
    let taskName = document.getElementById("input").value;
    //Calling the setTitle method to add taskName into the title array
    setTitle((prev) => {
      return [...prev, taskName];
    });
    //It uses spread operator to push the new element
  }

  function deleteItem(id) {
    setTitle((prev) => {
      return prev.filter((title, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <input
        autoComplete="off"
        type="text"
        id="input"
        placeholder="Enter task"
      />
      <button onClick={AddItem} id="btn">
        Add
      </button>
      <ul id="list">
        {title.map((item, index) => {
          return (
            <List key={index} id={index} onChecked={deleteItem} text={item} />
          );
        })}
      </ul>
    </div>
  );
  //Using the map to iterate the array and return the index and text to the <List />
  //Returning the component to the renderer
  //passed the custom properties (functions and values)
}

export default InputBox;
