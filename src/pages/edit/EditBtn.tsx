import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { styled } from "styled-components"

import { useAppSelector } from "../../stores/store";

import useEditBtn from "../../Hooks/useEditBtn";

import Popup from "../../components/Popup";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 15px;
`

export default function EditBtn(){

    const editData = useAppSelector((state)=>state.editButton)

    const userState = useAppSelector((state)=>state.userState)

    const [editState,setEditState] = useState<boolean>(false)

    const {id,category} = useParams()

    const categoryId = category ?? ''
    const itemId = id ?? ''

    const navigate = useNavigate()

    const createBtn = useEditBtn;

    const handelEditBtn = async () => {
        await createBtn(
            {editData, userState, category: categoryId, id: itemId});
        navigate(`/${category}`)
    }

    const handelEditState = () =>{
        setEditState(true)
    }

    return(
        <Container>
            <button onClick={handelEditState}>
                수정하기
            </button>
            {editState ? <Popup
         text="정말 수정하시겠습니까?"
         buttonText="수정"
         setState={setEditState}
          button={handelEditBtn}/> : null}
        </Container>
    )
}