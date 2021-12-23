import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { useState } from "react";
function SearchArea() {
  const [pickup, setPickup] = useState("");
  const [Dropoff, setDropoff] = useState("");
  return (
    <Wrapper>
      <Link href="/">
        <BackButton>
          <Button src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </BackButton>
      </Link>
      <InputContainer>
        <Actions>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </Actions>
        <InputArea>
          <Input placeholder="Enter The Pickup Location" value={pickup} onChange={(e) => setPickup(e.target.value)} />
          <Input placeholder="Select Destination" value={Dropoff} onChange={(e) => setDropoff(e.target.value)} />
        </InputArea>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <Icon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link href={{ pathname: "/rides", query: { pickup: pickup, Dropoff: Dropoff } }}>
        <ConfirmButton>Click To Confirm Location</ConfirmButton>
      </Link>
      <CashContainer>
        <CashItems>
          <Coupons src="https://cdn.static-zoutons.com/images/originals/blog/uberArtboard_5_1613031300.png" />
          <Coupons src="https://cdn.static-zoutons.com/images/originals/blog/uberArtboard_2_1613031194.png" />
          {/*<Coupons src="https://cdn.static-zoutons.com/images/originals/blog/uberArtboard_4_1613031236.png" />*/}
        </CashItems>
      </CashContainer>
    </Wrapper>
  );
}

export default SearchArea;
const Wrapper = tw.div`
  bg-gray-200 h-screen w-screen
`;
const BackButton = tw.div`
  bg-white px-4 cursor-pointer
`;
const Button = tw.img`
 h-9 bg-gray-100 rounded-full
`;
const InputContainer = tw.div`
  bg-white flex items-center px-4
`;
const Actions = tw.div`
  w-10 flex flex-col mr-4 items-center
`;
const Circle = tw.img`
  h-2.5 
`;
const Line = tw.img`
  h-10
`;
const Square = tw.img`
 h-3 
`;
const InputArea = tw.div`
  flex flex-col flex-1 m-2 
`;
const Input = tw.input`
  h-10 bg-gray-200 my-2 rounded p-3 outline-none border-none
`;
const PlusIcon = tw.img`
  w-12 h-12  bg-gray-200 rounded-full ml-1 mr-2
`;

const SavedPlaces = tw.div`
  flex items-center bg-white py-2 px-4 my-2 mx-2
`;
const Icon = tw.img`
  h-10 w-10 mr-3 bg-gray-400 p-2 rounded-full
`;
const ConfirmButton = tw.div`
  bg-black text-white mt-5 w-60  ml-auto mr-auto flex items-center justify-center px-3 py-1.5 rounded hover:text-black hover:bg-white transition cursor-pointer

`;
const CashContainer = tw.div`
 bg-gray-200 p-6 flex 

`
const CashItems = tw.div`
 flex flex-1 flex-wrap justify-between
`
const Coupons = tw.img`
 w-50 h-40 object-contain  rounded mx-3 my-3 bg-gray-200 rounded-md cursor-pointer transform hover:scale-105 transition
`