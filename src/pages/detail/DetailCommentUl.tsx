import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../stores/store"
import Popup from "../../components/Popup"

import useDeleteBtn from "../../Hooks/useDeleteBtn";
import { removeCommentData } from "../../stores/features/comment/commentDataSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import getDate from "../../utils/getDate";
import { commentItemType } from "../../types/dataTypes";

type DetailCommentUlType = {
    category: string,
    id: string,
}

export default function DetailCommentUl({
    category,id
}: DetailCommentUlType){
    const userUid = useAppSelector((state)=>state.userState.userUid)
    const commentData = useAppSelector((state)=>state.commentData.commentData)

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
    // commentData 배열을 복사합니다.
    const sortedCommentData = [...commentData];

// date 값을 기준으로 정렬합니다.
    sortedCommentData.sort((a, b) => b.date - a.date);

    return(
        <ul>
            {sortedCommentData.map((data: commentItemType)=>{
                return(
                    <li key={data.id}>
                        <div>

                            <span>{data.commentName} {getDate(data.date)}</span>

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