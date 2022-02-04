import React, { useEffect, useState } from 'react'
import tw from "tailwind-styled-components";
import { carList } from '../resources/carList';

function RideOptions({ Pickup, Drop }) {
    const [rideDuration, setrideDuration] = useState([0, 0])

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${Pickup[0]},${Pickup[1]};${Drop[0]},${Drop[1]}?access_token=pkAmir.eyJ1IjoidGVjaGtpZCIsImEiOiJja3ZxZnJ4M24xa2ljMzNxZnNxMzRhem00In0.ZmYGC7iuunOHG7vTu5uEDg`)
            .then((res) => res.json())
            .then(data => {
                setrideDuration(data.routes[0].duration / 100)
            })
    }, [Pickup, Drop])
    return (
        <Wrapper>
            <Title>Select Ride or Swipe up more..</Title>
            <Carlist>
                {carList.map((car, index) => (
                    <Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <Details>
                            <Service>{car.service}</Service>
                            <Time>{car.time}</Time>
                        </Details>
                        <Price>{"Rs: " + ((rideDuration * car.multiplier)).toFixed(2)} /-</Price>
                    </Car>
                ))}
            </Carlist>
        </Wrapper>
    )
}

export default RideOptions
const Wrapper = tw.div`
    flex-1 
`
const Title = tw.div`
    text-gray-500 text-center text-small py-5 border-b
`
const Carlist = tw.div`
`
const Car = tw.div`
    flex p-5 items-center 
`
const CarImage = tw.img`
    h-14 mr-3
`
const Details = tw.div`
    flex-1
`
const Service = tw.div`
    font-medium
`
const Time = tw.div`
    text-xs text-blue-500
`
const Price = tw.div`
    text-sm font-semibold
`
