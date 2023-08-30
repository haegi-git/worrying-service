import styled from "styled-components"
import { useAppSelector } from "../../stores/store"
import useJoinBtn from "../../Hooks/useJoinBtn"
import { useNavigate } from "react-router-dom"

const Button = styled.button`
    width: 100%;
    border: 1px solid black;
    background-color: red;
    border-radius: 15px;
    padding: 5px;
    margin-top:15px;
`


export default function JoinButton(){

    const joinValue = useAppSelector((state)=>state.joinButton)

    const navigate = useNavigate()

    const email = joinValue.email
    const password = joinValue.password
    const nickname = joinValue.nickname
    const userPhoto = joinValue.photoURL

    const joinButtonDisabled = email.length < 6 || password.length < 6 || nickname.length < 3

        const joinBtn = useJoinBtn({email,password,nickname,userPhoto})

        const join = () =>{
            joinBtn().then(()=>{
                navigate('/')
            }).catch((error)=>{
                console.error(error)
            })
        }
    return(
        <Button
        disabled={joinButtonDisabled}
         onClick={join}>회원 가입</Button>
    )
}