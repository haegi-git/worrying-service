import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { useAppSelector } from "../../stores/store"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button{
        width: 150px;
        padding: 7px;
        border: 1px solid black;
        background-color: #fff;
        border-radius: 15px;
        text-align: center;
        margin-top:15px;
        cursor: pointer;
    }
`

export default function LoginButtonField(){
    const navigate = useNavigate()

    const loginValue = useAppSelector((state)=>state.loginButton)

    const auth = getAuth();

    const {email,password} = loginValue

    const loginButton = () =>{
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            const user = userCredential.user
            navigate('/')
            console.log(user)
        }).catch((error)=>{
            console.error(error)
        })
    }



    return(
        <Container>
            <button onClick={loginButton}>
                로그인
            </button>
            <button onClick={()=>{navigate('/join')}}>
                회원 가입
            </button>
        </Container>
    )
}