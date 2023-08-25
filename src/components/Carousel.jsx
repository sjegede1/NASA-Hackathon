import React from 'react'
import "./Carousel.css"

function Carousel({data, setCurrentData}) {
  if (data.length === 0) return <div className="carousel"></div>
  const handleClick = (i) => {
    if (data !== undefined) {setCurrentData(data[i])}
    console.log('You clicked on',data[i])
  }

  return (
    <div className="carousel">
        {data.map((item, index) => {
            return (
                <img key={index} src={item.url} alt={item.title} className="carousel-img" onClick={() => {handleClick(index)}}/>
            )
        })}
    </div>
  )
}

export default Carousel