import { styled } from "styled-components"
import Popup from "../../components/Popup"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../stores/store"
import { useState } from "react"
import { onChangeEditCategory,
         onChangeEditContent,
        onChangeEditTitle } from "../../stores/features/EditButton/editButtonSlice"
import useDeleteBtn from "../../Hooks/useDeleteBtn"
import { removePostData } from "../../stores/features/dataState/dataStateSlice"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: end;
    button{
        width: 100px;
        height: 30px;
        margin-left: 15px;
        background-color: ${((props)=>props.theme.colors.mainColor)};
        border-radius: 15px;
        border: ${((props)=>props.theme.border.grayBorder)};
        margin-top:15px;
    }
`

type DetailButtonProps = {
    detailData: any,
    category: string | undefined,
    id: string | undefined,
    userUid: string | null,
}

export default function DetailButton({
    detailData,category,id,userUid}: DetailButtonProps){

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

    const [removePopupState,setRemovePopupState] = useState<boolean>(false)

    const editButton = () =>{
        if(userUid === detailData.userUid){
        navigate(`/edit/${category}/${id}`)
        dispatch(onChangeEditTitle(detailData?.title))
        dispatch(onChangeEditContent(detailData?.content))
        dispatch(onChangeEditCategory(category))
        }else{
            alert('본인의 게시글이 아닙니다.')
        }
    }

const removeButton = () => {

    if(userUid === detailData.userUid){
        setRemovePopupState(true)
    }else{
        alert('본인의 게시글이 아닙니다.')
    }
}

const deleteBtn = useDeleteBtn();

const deleteDoc = async () =>{
    await deleteBtn.postDelete({category,id});
    dispatch(removePostData(id));
    navigate(`/${category}`);
    setRemovePopupState(false)
}


    return(
        <Container>

        <button onClick={editButton}>수정하기</button>
        <button onClick={removeButton}>삭제하기</button>

        {removePopupState ? <Popup
         text="정말 삭제하시겠습니까?"
         buttonText="삭제"
         setState={setRemovePopupState}
          button={deleteDoc}/> : null}

        </Container>
    )
}