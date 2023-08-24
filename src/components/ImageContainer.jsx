import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'

function ImageContainer() {
    const [data, setData] = useState([])
    const [currentData, setCurrentData] = useState({})
    useEffect(async () => {
        const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=VMV9vIgFB7Mfpe28RjcFSDyawICxwznNYKIYYQCS&count=10`)
        const data = await res.data
        setCurrentData(data[0])
    })
    return (
        <div className="container">
            <Carousel data={data} />
            <Description currentData={currentData} />
        </div>
    )
}

export default ImageContainer