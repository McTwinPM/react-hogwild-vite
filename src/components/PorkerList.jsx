import React from "react";
import PorkerCard from "./PorkerCard";



function PorkerList({ porkers, onHogForm, onHide }) {
  if (!porkers || porkers.length === 0) {
    return <div>No porkers available</div>;
  }
  return (
    <>
      <div className="New-Porker-Form">
      </div>
      <div className="porker-list">
        {porkers.map((porker) => (
        <PorkerCard
          key={porker.name}
          name={porker.name}
          image={porker.image}
          specialty={porker.specialty}
          weight={porker.weight}
          highestMedal={porker["highest medal achieved"]}
          greased={porker.greased}
          onHide={onHide}
        />
      ))}
    </div>
    </>
  );
}

export default PorkerList;
