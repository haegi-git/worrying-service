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
        background-color: ${((props)=>props.theme.colors.mainColor)};
        border-radius: 15px;
        text-align: center;
        margin-top:15px;
        cursor: pointer;
    }
`

export default function SigninButtonField(){
    const navigate = useNavigate()

    const signinState = useAppSelector((state)=>state.signinState)

    const auth = getAuth();

    const {email,password} = signinState

    const signinButton = () =>{
        signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
            navigate('/')
        }).catch((error)=>{
            console.error(error)
        })
    }



    return(
        <Container>
            <button onClick={signinButton}>
                로그인
            </button>
            <button onClick={()=>{navigate('/signup')}}>
                회원 가입
            </button>
        </Container>
    )
}