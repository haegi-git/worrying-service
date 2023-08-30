import { styled } from "styled-components"

const Container = styled.div`
    width: 100px;
    height: 200px;
    background-color: aqua;
`

export default function QuestionBox(){
    return(
        <Container>
            박스
        </Container>
    )
}