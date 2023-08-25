import React from 'react'
import "./Description.css"

function Description({currentData}) {
  if (currentData.explanation === undefined) {

    return (
      <div className="description">
        Loading  
      </div>
    )
  }


  console.log(currentData); 
  return (

    
    <div className="description">
      <strong>Description:</strong> {currentData.explanation}   
    </div>
  )
}

export default Description