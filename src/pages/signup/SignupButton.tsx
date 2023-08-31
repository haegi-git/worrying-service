import styled from "styled-components"
import { useAppSelector } from "../../stores/store"

import { useNavigate } from "react-router-dom"
import useSignup from "../../Hooks/useSignup"

const Button = styled.button`
    width: 100%;
    border: 1px solid black;
    background-color: red;
    border-radius: 15px;
    padding: 5px;
    margin-top:15px;
`


export default function SignupButton(){

    const SignupState = useAppSelector((state)=>state.signupState)

    const navigate = useNavigate()

    const email = SignupState.email
    const password = SignupState.password
    const nickname = SignupState.nickname
    const userPhoto = SignupState.photoURL

    const joinButtonDisabled = email.length < 6 || password.length < 6 || nickname.length < 3

        const signupButton = useSignup({email,password,nickname,userPhoto})

        const signup = () =>{
            signupButton().then(()=>{
                navigate('/')
            }).catch((error)=>{
                console.error(error)
            })
        }
    return(
        <Button
        disabled={joinButtonDisabled}
         onClick={signup}>회원 가입</Button>
    )
}