import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { styled } from "styled-components"
import useSideMenuBtn from "../Hooks/useSideMenuBtn"
import SideMenu from "./SideMenu"

const Container = styled.header`
    position: relative;
    display: flex;
    padding: 15px;
    font-size: 1.5em;
    justify-content: space-between;
    background-color: ${((props)=>props.theme.colors.mainColor)};
`

export default function Header(){

    const sideMenuBtn = useSideMenuBtn()


    return(
        <Container>
            <span>익명 고민소</span>
            <FontAwesomeIcon onClick={sideMenuBtn} icon={faBars} />
            <SideMenu />
        </Container>
    )
}