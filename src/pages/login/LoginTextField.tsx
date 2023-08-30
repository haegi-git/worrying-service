import { styled } from "styled-components"

import LoginInput from "./LoginInput"

import { useAppDispatch, useAppSelector } from "../../stores/store"
import { onChangeLoginEmail, onChangeLoginPassword } from "../../stores/features/LoginButton/loginButtonSlice"
import LoginButtonField from "./LoginButtonField"

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
`

export default function LoginTextField(){
    const value = useAppSelector((state)=>state.loginButton)

    const dispatch = useAppDispatch()

    const {email,password} = value

    const handelLoginInput = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        switch (field) {
            case 'email':
                dispatch(onChangeLoginEmail(value));
                break;
            case 'password':
                dispatch(onChangeLoginPassword(value));
                break;
            default:
                break;
        }
    };
    return(
        <Container>
            <LoginInput
                htmlFor="email"
                label="이메일을 입력하세요."
                name="email"
                id="email"
                type="email"
                placeholder="이메일을 입력하세요."
                value={email}
                onChange={handelLoginInput('email')}
                minLength={3}
            />

            <LoginInput
                htmlFor="password"
                label="비밀번호를 입력하세요."
                name="password"
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={handelLoginInput('password')}
                minLength={3}
            />

            <LoginButtonField />
        </Container>
    )
}