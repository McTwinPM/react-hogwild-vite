import React from "react";
import PorkerCard from "./PorkerCard";
import Filter from "./Filter";

function PorkerList({ porkers, onPorkerClick }) {
  if (!porkers || porkers.length === 0) {
    return <div>No porkers available</div>;
  }
  return (
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

        />
      ))}
    </div>
  );
}

export default PorkerList;
