import { Link } from "react-router-dom"
import styled from "styled-components"

const CategoryUl = styled.ul`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid black;
    padding-bottom: 35px;
    li{
        margin-top:15px;
        font-size: 1.5em;
        font-weight: bold;
        padding: 10px;
    }
`

export default function SideMenuLogin(){
    return(
        <CategoryUl>

            <li><Link to='/signin'>로그인</Link></li>
            <li><Link to='/signup'>회원 가입</Link></li>

        </CategoryUl>
    )
}