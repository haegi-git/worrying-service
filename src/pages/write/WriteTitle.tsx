import { styled } from "styled-components"
import { useAppDispatch, useAppSelector } from "../../stores/store"
import { onChangeTitle } from "../../stores/features/writeValue/writeValueSlice"

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

export default function WriteTitle(){
    const titleValue = useAppSelector((state)=>state.writeValue.title)
    const dispatch = useAppDispatch()

    const handelTitle = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const titleVal = e.target.value
        dispatch(onChangeTitle(titleVal))
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