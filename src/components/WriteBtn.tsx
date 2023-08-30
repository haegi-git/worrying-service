import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"

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
    return(
        <WriteButton onClick={()=>{
            navigate('/write')
        }}>
            글 작성
        </WriteButton>
    )
}