import React, { useContext, useEffect, useReducer } from 'react'
import NameContext from './NameContext'
export default function B() {

    const name=useContext(NameContext)
  return (
    <div>B,{name.phone}</div>
  )
}


function recuderfun()
{
      switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      }
}
const initialState={count:0}
const[state,dispatch]=useReducer(recuderfun,initialState)

dispatch({type:increment})