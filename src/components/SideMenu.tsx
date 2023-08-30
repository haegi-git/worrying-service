import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { styled } from "styled-components"

import SideMenuUserInfo from "./SideMenuUserInfo"
import SideMenuCategory from "./SideMenuCategory"

import useSideMenuBtn from "../Hooks/useSideMenuBtn"

import { useAppSelector } from "../stores/store"
import SideMenuLogin from "./SideMenuLogin"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import { useEffectOnce } from "usehooks-ts"

type ContainerType = {
    $menuState: boolean
}

const Container = styled.div<ContainerType>`
    position: fixed;
    top:0;
    right: ${(props)=> props.$menuState ? '0px' : '-55%'};
    padding: 15px;
    background-color: ${((props)=>props.theme.colors.mainColor)};
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.5s;
    z-index: 1;
    svg{
        position: absolute;
        left: 10px;
        top:10px;
        font-size: 2em;
        cursor: pointer;
    }
    img{
        width: 100px;
    }
    @media (max-width:768px) {
        width: 50%;
        font-size:0.7em
    }
    @media (min-width:769px) {
        width: 30%;
        font-size:0.8em
    }
    @media (min-width:1200px) {
        width:300px
    }
`

export default function SideMenu(){
    const menuState = useAppSelector((state) => state.sideMenu);

    const [userUid,setUserUid] = useState<string>()

    const auth = getAuth()
    useEffectOnce(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUserUid(user.uid)
            }else{
                setUserUid(undefined)
            }
        })
    })

    const sideMenuBtn = useSideMenuBtn()
    return(
        <Container $menuState={menuState}>
            <FontAwesomeIcon onClick={sideMenuBtn} icon={faXmark} />
            {userUid ? <SideMenuUserInfo/> : <SideMenuLogin/>}
            <SideMenuCategory/>
        </Container>
    )
}