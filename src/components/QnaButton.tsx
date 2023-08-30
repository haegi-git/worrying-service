import { styled } from "styled-components"
import QuestionBox from "./QuestionBox"

const Container = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom:20px;
    right: 20px;
`

export default function QnaButton(){
    return(
        <Container>
            <QuestionBox/>
        </Container>
    )
}