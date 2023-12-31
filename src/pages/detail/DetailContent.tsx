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

type DetailContentProps = {
    title: string,
    content: string,
    date: number,
    postName:string,
    category:string | undefined
}

export default function DetailContent({
    title,content,date,postName,category}:DetailContentProps){
    return(
        <Container>
            <h1>{title}</h1>
            {category === 'free' ?
             <span>{postName} - {getDate(date)}</span> :
             <span>익명의 {postName} - {getDate(date)}</span>
            }
            <p>{content}</p>
        </Container>
    )
}