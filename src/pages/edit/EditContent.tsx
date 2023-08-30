import styled from "styled-components"

import { useAppDispatch, useAppSelector } from "../../stores/store"

import { onChangeEditContent } from "../../stores/features/EditButton/editButtonSlice"

const Container = styled.div`
    width:100%;
    height: 500px;
    textarea{
        height: 100%;
        width: 100%;
        border: 1px solid black;
        border-radius: 5px;
        font-size:${((props)=> props.theme.input.contentFontSize)}
    }
`


export default function EditContent(){
    const contentValue = useAppSelector((state)=>state.editButton.editContent)

    const dispatch = useAppDispatch()
    const handelContent = (e: any) =>{
        const contentVal = e.target.value
        dispatch(onChangeEditContent(contentVal))
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