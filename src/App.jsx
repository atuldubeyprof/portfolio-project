import React, { useState } from 'react';
const optionsList = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango'];

function MultiSelectDropdown() {
  const [options] = useState(optionsList);      
  const[display,setDisplay]=useState(false) 
 function showDisplay()
 {
  setDisplay(!display)
 }
 const [item,addItem]=useState([])
 function getAddItem(fruits)
 {
if(item.includes(fruits))
{
addItem(item.filter((item1)=>
item1!==fruits
))
}
else
{
addItem([...item ,fruits])
}
 }

return(

<>

<p onClick={showDisplay}>display fruit</p>
<p>{item}</p>
  {display &&
    options.map((fruits)=>
    {
     return <li onClick={()=>getAddItem(fruits)} key={fruits}>{fruits}</li>
    })
  }
  </>
)



 
}

const App = MultiSelectDropdown

export default App;


