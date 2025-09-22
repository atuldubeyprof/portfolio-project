import React, { useState, useEffect, useMemo } from "react";

import { useRef } from 'react';

function App()
{


let a=useRef()

useEffect(() => {
a.current=a.current+1
console.log("a",a.current)
});

return (
  <div>
    <p>Current Count: </p>

  </div>
);
}

export default App;
