import React, {useState, useEffect } from 'react'
import B from './B'
import NameContext from './NameContext'
import axios from 'axios';
export default function A() {
  const [userData, setUserData] = useState(null);

//  /useEffect(() => {
//     // Fetch API data
//     axios.get('https://jsonplaceholder.typicode.com/users/1')
//       .then(res => setUserData(res))
//       .catch(err => console.error(err));
//   }, []);
  let obj={
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
  const name="Atul"


  return (
<NameContext.Provider value={obj}>

  <div>A</div>
  <B/>
</NameContext.Provider>
  
  )
}
