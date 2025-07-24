import React, { useState } from "react";
import Nav from "./Nav";
import PorkerList from "./PorkerList";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {
  const [filteredHogs, setFilteredHogs] = useState(hogs);

  const handleFilterChange = (newFilteredHogs) => {
    setFilteredHogs(newFilteredHogs);
  };

  return (
    <div className="App">
      <Nav />
      <Filter hogs={hogs} onFilterChange={handleFilterChange} />
      <PorkerList porkers={filteredHogs} />
    </div>
  );
}

export default App;
