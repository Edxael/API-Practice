import React from 'react'
import ReactDOM from 'react-dom'
// ----------------------------------
import Play1 from './comps/01-Play.jsx'


const IndexComp = ()=>{
  return(
    <div>
      <div>Hello</div>
      <Play1/>
    </div>
  )
}

ReactDOM.render(<IndexComp/>, document.getElementById("root"))
