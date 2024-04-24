import React, { useState } from "react";
import "./searchBar.scss";

const types = ["buy", "rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };
  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="location"
          placeholder="Min Price"
          min={0}
          max={10000000}
        />
        <input
          type="number"
          name="location"
          placeholder="Max Price"
          min={0}
          max={10000000}
        />

        <button>
          <img src="/search.png" alt="search icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
