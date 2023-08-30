import styled from "styled-components"
import getDate from "../../utils/getDate"

const Container = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 15px;
    h1{
        padding:10px;
    }
    span{
        padding:10px;
        display: block;
        border-bottom: ${((props)=>props.theme.border.grayBorder)};
    }
    p{
        padding:10px;
    }
`

type test = {
    title: string,
    content: string,
    date: number
}

export default function DetailContent({title,content,date}:test){
    return(
        <Container>
            <h1>{title}1</h1>
            <span>익명의 작성자 - {getDate(date)}</span>
            <p>{content}</p>
        </Container>
    )
}