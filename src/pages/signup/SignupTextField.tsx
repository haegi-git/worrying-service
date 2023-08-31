import { styled } from "styled-components"
import { useAppDispatch, useAppSelector } from "../../stores/store"
import { onChangeEmail, onChangeNickname, onChangePassword } from "../../stores/features/signupState/signupStateSlice"
import JoinInput from "./SignupInput"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:15px;
    input{
        margin-bottom: 15px;
        margin-top:5px;
        border: none;
        border-bottom: 1px solid black;
        padding: 10px;
    }
    label{
        padding-left: 10px;
    }
    p{
        margin-bottom: 10px;
        padding-left: 10px;
    }
`

export default function SignupTextField(){

    const singupState = useAppSelector((state)=>state.signupState)

    const dispatch = useAppDispatch()

    const handleJoinInput = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        switch (field) {
            case 'email':
                dispatch(onChangeEmail(value));
                break;
            case 'nickname':
                dispatch(onChangeNickname(value));
                break;
            case 'password':
                dispatch(onChangePassword(value));
                break;
            default:
                break;
        }
    };

    return(
        <Container>
            <JoinInput
                htmlFor="Email"
                label="이메일을 입력하세요."
                name="Email"
                id="Email"
                type="email"
                placeholder="이메일을 입력하세요."
                value={singupState.email}
                onChange={handleJoinInput('email')}
                minLength={6}
            />
            <JoinInput
                htmlFor="Nickname"
                label="닉네임을 입력하세요."
                name="Nickname"
                id="Nickname"
                type="text"
                placeholder="닉네임을 입력하세요."
                value={singupState.nickname}
                onChange={handleJoinInput('nickname')}
                minLength={3}
            />
            <JoinInput
                htmlFor="Password"
                label="비밀번호를 입력하세요."
                name="Password"
                id="Password"
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={singupState.password}
                onChange={handleJoinInput('password')}
                minLength={6}
            />
        </Container>
    )
}