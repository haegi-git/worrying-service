import styled from "styled-components"

import { Outlet } from "react-router-dom"

import Header from "./Header"
import { getAuth, signOut } from "firebase/auth"
import { useAppSelector } from "../stores/store"
import useUserState from "../Hooks/useUserState"

const Container = styled.div`
    width: 100%;
    position: relative;
    margin: auto;
`



export default function Layout(){

    const userState = useAppSelector((state)=>state.userState)

    const testDAta = useAppSelector((state)=>state.commentData.commentData)

    console.log(testDAta)

    const auth = getAuth()

    useUserState()

    console.log(userState)

    const logout = () =>{
        signOut(auth)
    }

    return(
        <Container>
            <button onClick={logout}>로그아웃</button>
            <Header />
            <Outlet/>
        </Container>
    )
}