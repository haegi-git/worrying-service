import styled from "styled-components"

import { Outlet } from "react-router-dom"

import Header from "./Header"

import useUserState from "../Hooks/useUserState"
import anonymousAnimal from "../utils/anonymousAnimal"

const Container = styled.div`
    width: 100%;
    position: relative;
    margin: auto;
`



export default function Layout(){

    useUserState()

    anonymousAnimal()

    return(
        <Container>
            <Header />
            <Outlet/>
        </Container>
    )
}