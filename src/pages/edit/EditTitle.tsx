import { styled } from "styled-components"

import { useAppDispatch, useAppSelector } from "../../stores/store"

import { onChangeEditTitle } from "../../stores/features/EditButton/editButtonSlice"

const Container = styled.div`
    width:100%;
    height: 50px;
    input{
        height: 100%;
        width: 100%;
        border: none;
        border-bottom: 1px solid black;
        font-size:${((props)=> props.theme.input.titleFontSize)}
    }
`

export default function EditTitle(){
    const titleValue = useAppSelector((state)=>state.editButton.editTitle)
    const dispatch = useAppDispatch()

    const handelTitle = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const titleVal = e.target.value
        dispatch(onChangeEditTitle(titleVal))
    }
    return(
            <Container>
            <input
            value={titleValue}
            type="text" id="Write_Title"
            placeholder="제목을 입력하세요."
            onChange={handelTitle}/>
            </Container>
    )
}