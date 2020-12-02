import React from "react";
import "./DraggedItem.css";

function DraggedItem({ tasks }) {
  return (
    <div className="draggedItem">
      <div className="draggedItem__sec">
        <div className="draggedItem__sec__head">Dragged item</div>
        <div className="draggedItem__sec__items">
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.name}</strong> is added
            </li>
          ))}
        </div>
      </div>
      <div className="saveSec">
        <button className="cancel">CANCEL</button>
        <button className="save">SAVE</button>
      </div>
    </div>
  );
}

export default DraggedItem;
