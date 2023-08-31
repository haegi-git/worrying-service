import { styled } from "styled-components"

import { useAppDispatch, useAppSelector } from "../../stores/store"
import { onChangeSigninEmail, onChangeSigninPassword } from "../../stores/features/signinState/signinStateSlice"

import SigninInput from "./SigninInput"
import SigninButtonField from "./SigninButtonField"

const Container = styled.div`
    width: 500px;
    margin: auto;
    background-color: azure;

    input{
        width: 100%;
        border-radius: 15px;
        padding: 10px;
        border: none;
        border: 1px solid black;
    }
    @media (max-width:768px){
        width: 100%;
    }
`

export default function SigninTextField(){
    const signinState = useAppSelector((state)=>state.signinState)

    const dispatch = useAppDispatch()

    const {email,password} = signinState

    const handelSigninInput = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        switch (field) {
            case 'email':
                dispatch(onChangeSigninEmail(value));
                break;
            case 'password':
                dispatch(onChangeSigninPassword(value));
                break;
            default:
                break;
        }
    };
    return(
        <Container>
            <SigninInput
                htmlFor="email"
                label="이메일을 입력하세요."
                name="email"
                id="email"
                type="email"
                placeholder="이메일을 입력하세요."
                value={email}
                onChange={handelSigninInput('email')}
                minLength={3}
            />

            <SigninInput
                htmlFor="password"
                label="비밀번호를 입력하세요."
                name="password"
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={handelSigninInput('password')}
                minLength={3}
            />

            <SigninButtonField />
        </Container>
    )
}