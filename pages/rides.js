import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import Map from "./components/Map";
import RideOptions from "./components/RideOptions";
import { useRouter } from 'next/router'
function rides() {
  const router = useRouter()
  const { pickup, Dropoff } = router.query


  const [Pickup, setPickup] = useState([0, 0])
  const [Drop, setDrop] = useState([0, 0])

  const getPickupCordinates = (pickup) => {

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoidGVjaGtpZCIsImEiOiJja3ZxZnJ4M24xa2ljMzNxZnNxMzRhem00In0.ZmYGC7iuunOHG7vTu5uEDg", limit: 1
      }))
      .then(response => response.json())
      .then(data => {
        setPickup(data.features[0].center);
      })
  }

  const getDropCordinates = (Dropoff) => {

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${Dropoff}.json?` +
      new URLSearchParams({
        access_token: "pk.eyJ1IjoidGVjaGtpZCIsImEiOiJja3ZxZnJ4M24xa2ljMzNxZnNxMzRhem00In0.ZmYGC7iuunOHG7vTu5uEDg", limit: 1
      }))
      .then(response => response.json())
      .then(data => {
        setDrop(data.features[0].center);
      })
  }
  useEffect(() => {
    getPickupCordinates(pickup);
    getDropCordinates(Dropoff);
  }, [pickup, Dropoff])
  return (
    <Wrapper>
      <BackContainer>
        <Link href="/SearchArea">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </BackContainer>
      <Map Pickup={Pickup} Drop={Drop} />
      <RideContainer>
        <RideOption>
          <RideOptions Pickup={Pickup} Drop={Drop} />
        </RideOption>
        <ConfirmButtonContainer>
          <ButtonArea>
            Confirm Ride
          </ButtonArea>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
}

export default rides;
const Wrapper = tw.div`
  flex  h-screen flex-col 
`;
const RideContainer = tw.div`
  flex-1 flex flex-col mb-3 h-1/2
`;
const RideOption = tw.div`
  flex-1 border-b-2
`
const ConfirmButtonContainer = tw.div`
  my-1 mx-4 py-3 text-center text-xl  cursor-pointer
`
const ButtonArea = tw.div`
  bg-black text-white rounded-lg 
`
const BackContainer = tw.div`
  rounded-full absolute top-4 left-4 z-10 cursor-pointer bg-white shadow-md
`
const BackButton = tw.img`
  h-full object-contain
`