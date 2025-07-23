import React from "react";
import PorkerCard from "./PorkerCard";

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
          onClick={() => onPorkerClick(porker)}

        />
      ))}
    </div>
  );
}

export default PorkerList;
