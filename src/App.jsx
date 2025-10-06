import React, { useState, useEffect } from 'react';

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [debouncedTerm, setDebouncedTerm] = useState('');
//    const [filteredData, setFilteredData] = useState([]);

// let sampleData=[
//   {
//     "title": "The Alchemist",
//     "author": "Paulo Coelho",
//     "year": 1988,
//     "genres": ["Adventure", "Fantasy"]
//   },
//   {
//     "title": "To Kill a Mockingbird",
//     "author": "Harper Lee",
//     "year": 1960,
//     "genres": ["Fiction", "Classic"]
//   },
//   {
//     "title": "Sapiens",
//     "author": "Yuval Noah Harari",
//     "year": 2011,
//     "genres": ["History", "Science"]
//   }
// ]
//   // Debounce logic
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedTerm(searchTerm);
//     }, 500); // delay in milliseconds

//     return () => {
//       clearTimeout(handler); // Cancel the previous timer
//     };
//   }, [searchTerm]);

//   useEffect(() => {
//     if (debouncedTerm) {
//       // Simulate API call
//      let res=sampleData.filter(data=>
//      {
//       let titledata =data.title.includes(debouncedTerm)
//       let autherData=data.author.includes(debouncedTerm)
//       return titledata||autherData
//      }


//      )
// setFilteredData(res)

//     }
//   }, [debouncedTerm]);

//   return (
//     <>
//         <input
//       type="text"
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       placeholder="Search something..."
//     />
//          {filteredData.length > 0 ? (
//         <ul>
//           {filteredData.map(item => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No matches found.</p>
//       )}
//     </>

// function Child() {
//   console.log("Child rendered");
//   return <div>I am a child</div>;
// }

// function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => setCount(count + 1);
//   useEffect(()=>
//   {
    
//   }
//   )

//   return (
//     <>
//       <button onClick={handleClick}>Increment</button>
//       <Child />
//     </>
//   );
// }

// function newPromise ()
// {
//   return new Promise((resolve,reject)=>
//   {

// if(1==2)
// {
//   resolve("greate")
// }
// else{
//   reject("reject")
// }


//   }
  
//   )
// }

// newPromise.then((result)=>console.log(result)).catch((err)=>console.log(err

//))

//import React from 'react';


// function withAuth(WrappedComponent) {
//   console.log("WrappedComponent",WrappedComponent)
//   return function AuthComponent(props) {
//     console.log("props",props)
//     const isAuthenticated = false
    
//     if (!isAuthenticated) {
//       return <div>Please log in to view this content.</div>;
//     }
    
//     return <WrappedComponent {...props} />;
//   };
// }


// function Dashboard(props) {
//   return <div>Welcome to the dashboard!</div>;
// }
import React, { useState } from 'react';

const countryStateData = {
  india: ['Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
  usa: ['California', 'Texas', 'New York', 'Florida'],
  canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta']
};

function DependentDropdown() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates(countryStateData[country] || []);
    setSelectedState('');
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div style={{ fontFamily: 'Arial', maxWidth: '300px' }}>
      <h3>Select Country:</h3>
      <select value={selectedCountry} onChange={handleCountryChange}>
        <option value="">-- Select Country --</option>
        {Object.keys(countryStateData).map((country) => (
          <option key={country} value={country}>
            {country.charAt(0).toUpperCase() + country.slice(1)}
          </option>
        ))}
      </select>

      <h3 style={{ marginTop: '20px' }}>Select State:</h3>
      <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
        <option value="">-- Select State --</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      {selectedCountry && selectedState && (
        <p style={{ marginTop: '20px' }}>
          ✅ You selected <strong>{selectedState}</strong> in <strong>{selectedCountry}</strong>.
        </p>
      )}
    </div>
  );
}



const App = DependentDropdown//withAuth(Dashboard);

export default App;


