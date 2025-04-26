import React from "react";

const Completedcards = ({completedCards}) => {
  return (
    <>
      <div
        className=" card "
        style={{ backgroundColor: "#FFC785", color: "white" }}
      >
        <div className="card-header" style={{ backgroundColor: "#FFC785" }}>
          Completed Tasks
        </div>
        <ul className="list-group list-group-flush">
          {completedCards.length > 0 ? (
            completedCards.map((task, index) => (
              <li key={index} className="list-group-item ">
                {task.taskTitle}
              </li>
            ))
          ) : (
            <li className="list-group-item">No Completed Tasks</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Completedcards;
