import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../stores/store"
import Popup from "../../components/Popup"

import useDeleteBtn from "../../Hooks/useDeleteBtn";
import { removeCommentData } from "../../stores/features/comment/commentDataSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import getDate from "../../utils/getDate";

type DetailCommentUlType = {
    category: string | undefined,
    id: string | undefined,
}

export default function DetailCommentUl({
    category,id
}: DetailCommentUlType){
    const commentData = useAppSelector((state)=>state.commentData.commentData);
    const userUid = useAppSelector((state)=>state.userState.userUid)

    const dispatch = useAppDispatch()

    const [removeCommentPopup,setRemoveCommentPopup] = useState(false);
    const [removeCommentId,setRemoveCommentId] = useState('');

    const removeComment = (commentId: string,dataUid: string) =>{

        if(userUid === dataUid){
        setRemoveCommentPopup(true)
        setRemoveCommentId(commentId)
        }else{
            alert('본인의 댓글이 아닙니다.')
        }
    }

    const deleteBtn = useDeleteBtn();

    const deleteCommentDoc = async () =>{
        await deleteBtn.commentDelete({
            category,
            id,
            commentCollection:'comment',
            commentId:removeCommentId})
        setRemoveCommentId('')
        setRemoveCommentPopup(false)
        dispatch(removeCommentData(removeCommentId))
    }

    return(
        <ul>
            {commentData.map((data:any)=>{
                return(
                    <li key={data.id}>
                        <div>

                            <span>거북이 {getDate(data.date)}</span>

                            <p>{data.comment}</p>

                            {userUid === data.userUid ?
                                <button
                                onClick={()=>removeComment(data.id,data.userUid)}>
                                <FontAwesomeIcon icon={faXmark}/> </button> : null}

                        </div>
                    </li>
                )
            })}
            {removeCommentPopup ?
                <Popup
                text="삭제할거임?"
                buttonText="삭제"
                setState={setRemoveCommentPopup}
                button={deleteCommentDoc} /> : null}
        </ul>
    )
}