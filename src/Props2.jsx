import React from 'react'

const Props2=(Props)=> {
    const first2=Props.first1
    console.log(first2)

  return (
    first2.map((display)=>
    <div>
       <h1>{display.no},{display.name}</h1> 

        
        </div>
  ))
}

export default Props2