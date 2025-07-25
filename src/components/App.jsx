import React, { useState } from "react";
import Nav from "./Nav";
import PorkerList from "./PorkerList";
import Filter from "./Filter";
import HogForm from "./HogForm";
import hogs from "../porkers_data";

function App() {
  const [allHogs, setAllHogs] = useState(hogs);
  const [filteredHogs, setFilteredHogs] = useState(hogs);
  const [hiddenHogs, setHiddenHogs] = useState(new Set());

  const handleFilterChange = (newFilteredHogs) => {
    const visibleHogs = newFilteredHogs.filter(
      (hog) => !hiddenHogs.has(hog.name)
    );
    setFilteredHogs(visibleHogs);
  };

  const handleHideHog = (hogName) => {
    setHiddenHogs((prev) => new Set([...prev, hogName]));
    setFilteredHogs((prev) => prev.filter((hog) => hog.name !== hogName));
  };

  const handleAddHog = (newHog) => {
    const updatedAllHogs = [...allHogs, newHog];
    setAllHogs(updatedAllHogs);
    
    if (!hiddenHogs.has(newHog.name)) {
      setFilteredHogs((prev) => [...prev, newHog]);
    }
  };

  return (
    <div className="App">
      <Nav />
      <HogForm onAddHog={handleAddHog} />
      <Filter
        hogs={allHogs.filter((hog) => !hiddenHogs.has(hog.name))}
        onFilterChange={handleFilterChange}
      />
      <PorkerList porkers={filteredHogs} onHide={handleHideHog} />
    </div>
  );
}

export default App;