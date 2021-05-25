import React from "react";

function List(props) {
  return (
    <div className="list-container">
      <li className="list-item">{props.text}</li>
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
        className="Delete"
      >
        <span aria-label="delete" role="img">
          ❌
        </span>
      </button>
    </div>
  );
  //Returning the list item component
  //Calling the deleteItem function using the properties
}

export default List;
