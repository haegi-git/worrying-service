import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../stores/store"
import { onChangeContent } from "../../stores/features/writeValue/writeValueSlice"

const Container = styled.div`
    width:100%;
    height: 500px;
    textarea{
        resize: none;
        height: 100%;
        width: 100%;
        border: 1px solid black;
        border-radius: 5px;
        font-size:${((props)=> props.theme.input.contentFontSize)}
    }
`


export default function WriteContent(){
    const contentValue = useAppSelector((state)=>state.writeValue.content)

    const dispatch = useAppDispatch()
    const handelContent = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        const contentVal = e.target.value
        dispatch(onChangeContent(contentVal))
    }
    return(
            <Container>
            <textarea
            value={contentValue}
            id="Write_Content"
            placeholder="제목을 입력하세요."
            onChange={handelContent}/>
            </Container>
    )
}