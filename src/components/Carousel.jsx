import React from 'react'
import "./Carousel.css"

function Carousel({data}) {
  if (data.length === 0) return <div className="carousel"></div>
  return (
    <div className="carousel">
        {data.map((item, index) => {
            return (
                <img key={index} src={item.url} alt={item.title} className="carousel-img" />
            )
        })}
    </div>
  )
}

export default Carousel