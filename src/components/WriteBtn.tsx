import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { useAppSelector } from "../stores/store"

const WriteButton = styled.button`
    width: 100%;
    background-color: ${(((props)=>props.theme.colors.mainColor))};
    border: none;
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;
`

export default function WriteBtn(){
    const navigate = useNavigate()

    const userState = useAppSelector((state)=>state.userState)

    const writeOnClick = () =>{
        if(userState.userUid){
            navigate('/write')
        }else{
            alert('로그인을 해야합니다.')
        }
    }
    
    return(
        <WriteButton onClick={writeOnClick}>
            글 작성
        </WriteButton>
    )
}