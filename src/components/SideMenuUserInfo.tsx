import { styled } from "styled-components"
import { useAppSelector } from "../stores/store"

const Container = styled.div`
    margin-top:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom:20px;
    border-bottom: 1px solid black;
    img{
        width: 80%;
        border-radius: 50%;
        margin-bottom: 20px;
    }
    span{
        font-size:1.3em;
    }
`
export default function SideMenuUserInfo(){

    const userState = useAppSelector((state)=>state.userState)

    const userPhoto = userState.userPhoto || '';


    return(
        <Container>
            <img src={userPhoto} alt="테스트이미지" />
            <span>{userState.userNickname}</span>
        </Container>
    )
}