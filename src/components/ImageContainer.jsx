import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import axios from 'axios'
import Description from './Description'
import "./ImageContainer.css"

function ImageContainer() {
    const [data, setData] = useState([])
    const [currentData, setCurrentData] = useState({})
    useEffect(() => {
        const start = async () => {
            const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=VMV9vIgFB7Mfpe28RjcFSDyawICxwznNYKIYYQCS&count=10`)
            await setData(res.data)
            setCurrentData(res.data[0])
        }
        start()
    },[])
    return (
        <div className="container">
            <Carousel data={data} setCurrentData={setCurrentData} />
            <Description currentData={currentData} />
        </div>
    )
}

export default ImageContainer