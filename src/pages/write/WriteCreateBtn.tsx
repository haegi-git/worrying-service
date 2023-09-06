import { styled } from "styled-components"

import { useAppDispatch, useAppSelector } from "../../stores/store";
import { useNavigate } from "react-router-dom";
import useWrite from "../../Hooks/useWrite";
import { onChangeContent, onChangeTitle } from "../../stores/features/writeValue/writeValueSlice";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 15px;
    button{
        width: 100px;
        height: 30px;
        border: 1px solid black;
        border-radius: 15px;
        background-color: #fff;
    }
`

export default function WriteCreateBtn(){

    const writeValue = useAppSelector((state)=>state.writeValue)

    const userState = useAppSelector((state)=>state.userState)

    const dispatch = useAppDispatch()

    const createBtn = useWrite();

    const timestamp = Date.now()

    const navigate = useNavigate()

    const handelCreateBtn = async () =>{
        await createBtn.postWrite({
            writeValue: writeValue,
            userState: userState,
            date: timestamp})

            dispatch(onChangeTitle(''))
            dispatch(onChangeContent(''))

        navigate(`/${writeValue.category}`)
    }
    return(
        <Container>
            <button onClick={handelCreateBtn}>
                글 생성
            </button>
        </Container>
    )
}