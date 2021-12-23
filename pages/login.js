import React, { useEffect } from 'react';
import tw from "tailwind-styled-components";
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { auth, provider } from '../firebase';
function login() {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])
    return (
        <Wrapper>
            <Logo src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />
            <Title>Log in to Access your Account</Title>
            <Large src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SigninButton onClick={() => signInWithPopup(auth, provider)}>
                Sign in with Google
            </SigninButton>
        </Wrapper>
    )
}

export default login
const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-5
`
const SigninButton = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full rounded-lg
`
const Logo = tw.img`
    h-20 w-auto object-contain self-start
`
const Title = tw.div`
    text-5xl pt-4 text-gray-500

`
const Large = tw.img`
    h-30 w-full object-contain self-center
`