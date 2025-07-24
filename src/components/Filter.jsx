import React, { useState } from "react";

function Filter({ hogs, onFilterChange }) {
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const handleGreasedFilterChange = (event) => {
    const isChecked = event.target.checked;
    setShowGreasedOnly(isChecked);

    let filteredHogs = isChecked ? hogs.filter((hog) => hog.greased) : hogs;

    if (sortBy) {
      filteredHogs = sortHogs(filteredHogs, sortBy);
    }

    onFilterChange(filteredHogs);
  };

  const handleSortChange = (event) => {
    const sortValue = event.target.value;
    setSortBy(sortValue);

    let filteredHogs = showGreasedOnly
      ? hogs.filter((hog) => hog.greased)
      : hogs;

    if (sortValue) {
      filteredHogs = sortHogs(filteredHogs, sortValue);
    }

    onFilterChange(filteredHogs);
  };

  const sortHogs = (hogsArray, sortBy) => {
    return [...hogsArray].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "weight") {
        return a.weight - b.weight;
      }
      return 0;
    });
  };

  return (
    <div className="filterWrapper">
      <div>
        <label htmlFor="greased-filter">Greased Pigs Only?</label>
        <input
          type="checkbox"
          id="greased-filter"
          checked={showGreasedOnly}
          onChange={handleGreasedFilterChange}
        />
      </div>

      <div>
        <label htmlFor="sort-select">Sort by:</label>
        <select id="sort-select" value={sortBy} onChange={handleSortChange}>
          <option value="">No sorting</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
