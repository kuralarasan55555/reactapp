import React, { useState, useEffect } from "react";
import './inde.css';

function WikipediaSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json&origin=*`;

    fetch(searchUrl)
      .then((response) => response.json())
      .then((result) => setSearchResults(result.query.search))
      .catch((error) => console.error(error));
  }, [searchTerm]);

  return (
    <div>
    <h1 className="cl">WIKI SEARCH</h1>
      <input
        type="text"
        placeholder="search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <ul>
        {searchResults.map((result) => (
          <li key={result.pageid}>
            <a id="g" href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" rel="noreferrer">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WikipediaSearch;