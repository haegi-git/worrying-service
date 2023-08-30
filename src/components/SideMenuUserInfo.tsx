import { styled } from "styled-components"
import { useAppSelector } from "../stores/store"
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import useSideMenuBtn from "../Hooks/useSideMenuBtn";

const Container = styled.div`
    margin-top:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom:20px;
    border-bottom: 1px solid black;
    font-size: 1.5em;
    font-weight: bold;
    img{
        width: 80%;
        border-radius: 50%;
        margin-bottom: 20px;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding-bottom: 15px;
    }
    ul{
        text-align: center;
        border-top:solid black 1px;
        padding-top: 15px;
        width: 100%;
    }
    ul > li:first-child {
        margin-bottom: 15px;
    }
    ul > li{
        padding:10px;
    }
`
export default function SideMenuUserInfo(){

    const userState = useAppSelector((state)=>state.userState)

    const userPhoto = userState.userPhoto || '';

    const auth = getAuth()

    const logout = () =>{
        signOut(auth)
    }

    const sideMenuClose = useSideMenuBtn()

    return(
        <Container>
            <div>
                <img src={userPhoto} alt="테스트이미지" />
                <span>{userState.userNickname}</span>
            </div>

            <ul>
                <li onClick={sideMenuClose}>
                    <Link to='/mypage'>
                    마이페이지
                    </Link></li>
                <li onClick={logout}>
                    <Link to='/'>로그아웃</Link>
                </li>
            </ul>
        </Container>
    )
}