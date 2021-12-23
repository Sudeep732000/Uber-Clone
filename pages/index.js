import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      }
      else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <LogoSection src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <ProfileArea>
            <Name>{user && user.name}</Name>
            <UserImage onClick={() => signOut(auth)} src={user && user.photoUrl} />
          </ProfileArea>
        </Header>
        <ActionButtons>
          <Link href="/SearchArea">
            <Items>
              <ActionImg src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </Items>
          </Link>
          <Items>
            <ActionImg src="https://i.ibb.co/1nStPWT/uberblacksuv.png" />
            Wheels
          </Items>
          <Items>
            <ActionImg src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Bookings
          </Items>
        </ActionButtons>
        <InputItems>Select Your Ride Destination</InputItems>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-white h-screen
`;

const ActionItems = tw.div`
  flex-1 p-5

`;
const Header = tw.div`
  flex justify-between items-center
`;
const LogoSection = tw.img`
  h-28
`;
const ProfileArea = tw.div`
  flex items-center
`;

const Name = tw.div`
  mr-4 w-25 text-sm
`;
const UserImage = tw.img`
  h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer
`;

const ActionButtons = tw.div`
  flex 
`;
const Items = tw.div`
  flex bg-gray-200 m-1 mr-5 flex-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer
`;
const ActionImg = tw.img`
  h-3/5
`;
const InputItems = tw.div`
  h-20 bg-gray-200 text-xl p-5 flex items-center mt-10
`;
