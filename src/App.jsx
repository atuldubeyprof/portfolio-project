import React, { useState } from 'react';
//import './MultiSelect.css'; // Same styles as before

const countryStateData = {
  india: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
  usa: ['California', 'Texas', 'New York', 'Florida'],
  canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta']
};

function CountryStateSelector() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedStates, setSelectedStates] = useState([]);
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedStates([]); // Reset selected states when country changes
  };

  const handleStateClick = (state) => {
    if (selectedStates.includes(state)) {
      setSelectedStates(selectedStates.filter((s) => s !== state));
    } else {
      setSelectedStates([...selectedStates, state]);
    }
  };

  const removeStateTag = (stateToRemove) => {
    setSelectedStates(selectedStates.filter((s) => s !== stateToRemove));
  };

  const states = selectedCountry ? countryStateData[selectedCountry] : [];

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px', width: '300px' }}>
      <h3>Select Country:</h3>
      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="">-- Select Country --</option>
        {Object.keys(countryStateData).map((country) => (
          <option key={country} value={country}>
            {country.charAt(0).toUpperCase() + country.slice(1)}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <>
          <h3 style={{ marginTop: '20px' }}>Select States:</h3>
          <div className="selected-tags" onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}>
            {selectedStates.map((state) => (
              <span key={state} className="tag">
                {state}
                <span
                  className="remove-tag"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeStateTag(state);
                  }}
                >
                  ×
                </span>
              </span>
            ))}
            <span className="placeholder">
              {selectedStates.length === 0 ? 'Select states...' : ''}
            </span>
          </div>

          {isStateDropdownOpen && (
            <ul className="dropdown">
              {states.map((state) => (
                <li
                  key={state}
                  onClick={() => handleStateClick(state)}
                  className={selectedStates.includes(state) ? 'selected' : ''}
                >
                  {state}
                  {selectedStates.includes(state) && <span> ✔</span>}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}


let App=CountryStateSelector

export default App


