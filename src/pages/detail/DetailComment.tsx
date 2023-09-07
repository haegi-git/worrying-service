import { styled } from "styled-components"

import { setCommentData } from "../../stores/features/comment/commentDataSlice"
import { onChangeCommentValue } from "../../stores/features/comment/commentValueSlice"
import { useAppDispatch, useAppSelector } from "../../stores/store"
import DetailCommentUl from "./DetailCommentUl"
import DetailCommentTextField from "./DetailCommentTextField"
import useWrite from "../../Hooks/useWrite"
import anonymousAnimal from "../../utils/anonymousAnimal"

type DetailCommentProps = {
    category: string,
    id: string,
    detailUserUid: string,
    postName:string
}

const CommentContainer = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 15px;
    margin-top:15px;
    min-height: 150px;
    ul > li:first-child{
        padding-top:10px;
    }
    ul > li{
        padding:5px;
        line-height: 25px;
        border-bottom: ${((props)=>props.theme.border.grayBorder)};
    }
    ul > li:last-child{
        border-bottom: none;
    }
    ul > li > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul > li > div > span{
        flex:1.5;
        text-align: center;
    }
    ul > li > div > p{
        flex:8.5;
    }
    ul > li > div > button{
        background-color: ${((props)=>props.theme.colors.mainColor)};
        border-radius: 50%;
        width: 30px;
        height: 30px;
        border: ${((props)=>props.theme.border.grayBorder)};
    }

    @media (max-width:768px) {
        ul > li > div > span{
        flex:2;
    }
        ul > li > div > p{
        flex:8;
    }
    }
`

export default function DetailComment({
    category,id,detailUserUid,postName}:DetailCommentProps){

    const dispatch = useAppDispatch()
    const commentData = useAppSelector((state)=>state.commentData.commentData)

    const commentValue = useAppSelector((state)=>state.commentValue.commentValue)
    const userState = useAppSelector((state)=>state.userState)

    const createComment = useWrite()

    const timestamp = Date.now()

    const handelCreateBtn = async () =>{

        if(commentValue.trim().length === 0){
            alert('댓글을 입력해주세요.')
        }else if(!userState.userUid){
            alert('로그인이 필요합니다.')
        }else if(commentValue.trim().length > 1 && userState.userUid){
            const userUid = userState.userUid;
            const userCommentData = commentData.find((item) => item.userUid === userUid);
            let commentName = '';
            if (userCommentData) {
              // 이미 작성한 댓글이 있는 경우
              commentName = userCommentData.commentName;
            }else if(detailUserUid === userState.userUid){
                commentName = postName
            }else if(!userCommentData){
              // 새로운 댓글을 작성하는 경우
              commentName = anonymousAnimal(); // 새로운 commentName 생성
              // Firestore에 새로운 댓글 추가 코드 (필요한 부분 추가)
            }

            if(category === 'anonymous'){
                createComment.commentWrite({
                    detailCollection: category,
                    detailId: id,
                    commentValue: commentValue,
                    userState: userState,
                    date: timestamp,
                    commentName: commentName,
                  });
                const newComment = {
                  comment: commentValue,
                  userUid: userUid,
                  date: timestamp,
                  commentName: commentName,
                };
                dispatch(setCommentData([...commentData, newComment])); // 댓글 작성하면 스토어에 추가
                dispatch(onChangeCommentValue('')); // 댓글 작성 시 인풋 초기화
            }else if(category === 'secret'){
                createComment.commentWrite({
                    detailCollection: category,
                    detailId: id,
                    commentValue: commentValue,
                    userState: userState,
                    date: timestamp,
                    commentName: commentName,
                  });
                const newComment = {
                  comment: commentValue,
                  userUid: userUid,
                  date: timestamp,
                  commentName: commentName,
                };
                dispatch(setCommentData([...commentData, newComment])); // 댓글 작성하면 스토어에 추가
                dispatch(onChangeCommentValue('')); // 댓글 작성 시 인풋 초기화
            }else if(category === 'free'){
                createComment.commentWrite({
                    detailCollection: category,
                    detailId: id,
                    commentValue: commentValue,
                    userState: userState,
                    date: timestamp,
                    commentName: userState.userNickname,
                  });
                const newComment = {
                  comment: commentValue,
                  userUid: userUid,
                  date: timestamp,
                  commentName: userState.userNickname,
                };
                dispatch(setCommentData([...commentData, newComment])); // 댓글 작성하면 스토어에 추가
                dispatch(onChangeCommentValue('')); // 댓글 작성 시 인풋 초기화
            }
        }
        }
    return(
        <CommentContainer>

            <DetailCommentTextField
            commentValue={commentValue}
            handelCreateBtn={handelCreateBtn}/>

             <DetailCommentUl category={category} id={id}/>

        </CommentContainer>
    )
}