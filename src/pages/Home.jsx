
    import React, { useState, useEffect } from 'react';

function Home () {
  const [SearchQuery, setSearchQuery] = useState('');
  const [SearchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch(`http://universities.hipolabs.com/search?country=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.log('Error fetching universities:', error);
      }
    };

    if (SearchQuery !== '') {
      fetchUniversities();
    }
  }, [SearchQuery]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div>
     <div>
      <input
        type="text"
        value={SearchQuery}
        onChange={handleSearchQueryChange}
        placeholder="Enter a country name"
      />

      {SearchResults.length > 0 && (
        <ul>
          {SearchResults.map((university) => (
            <li key={university.name}>
              <h3>{university.name}</h3>
              <p>{university.country}</p>
              <p>{university.website}</p>
            </li>
          ))}
        </ul>
      )}
    </div>

    </div>
  )
}

export default Home