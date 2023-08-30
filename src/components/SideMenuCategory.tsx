import { Link } from "react-router-dom"

import { styled } from "styled-components"
import useSideMenuBtn from "../Hooks/useSideMenuBtn"

const CategoryUl = styled.ul`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    li{
        margin-top:15px;
        font-size: 1.5em;
        font-weight: bold;
        padding: 10px;
    }
`

export default function SideMenuCategory(){
    const sideMenuClose = useSideMenuBtn()
    return(
        <CategoryUl>
            <li onClick={sideMenuClose}><Link to='/anonymous'>익명 게시판</Link></li>
            <li onClick={sideMenuClose}><Link to='/secret'>비밀 게시판</Link></li>
            <li onClick={sideMenuClose}><Link to='/free'>잡담소</Link></li>
        </CategoryUl>
    )
}