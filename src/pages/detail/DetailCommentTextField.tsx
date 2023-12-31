import { styled } from "styled-components"
import { onChangeCommentValue } from "../../stores/features/comment/commentValueSlice"
import { useAppDispatch, useAppSelector } from "../../stores/store"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import TextareaAutosize from 'react-textarea-autosize';

type DetailCommentTextFieldProps = {
    commentValue: string,
    handelCreateBtn: () => void
}

const Container = styled.div<{$commentValue: string}>`
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    padding-top:15px;
    textarea{
        width: 100%;
        padding: 5px;
        height: auto;
        overflow: hidden;
        border-radius: 15px;
        border:${((props)=>props.theme.border.grayBorder)};
        resize: none;
    }
    button{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${((props)=>props.theme.colors.mainColor)};
        border: ${((props)=>props.theme.border.grayBorder)};
        opacity: ${((props)=>props.$commentValue.length === 0 ? 0.7 : 1)};
        transition: all 1s;
        margin-left: 5px;
    }
`

export default function DetailCommentTextField({
    commentValue,
    handelCreateBtn
}:DetailCommentTextFieldProps){
    const dispatch = useAppDispatch()

    const userState = useAppSelector((state)=>state.userState)

    return(
        <Container $commentValue={commentValue}>
            {userState.userUid ? <TextareaAutosize
                placeholder="욕설 및 비방은 하지말아주세요."
                value={commentValue}
                onChange={(e)=>{
               dispatch(onChangeCommentValue(e.target.value));
            }}/> :
            <TextareaAutosize
                disabled={true}
                placeholder="로그인이 필요합니다."
                value={commentValue}
                onChange={(e)=>{
               dispatch(onChangeCommentValue(e.target.value));
            }}/>}
            <button onClick={handelCreateBtn}>
                <FontAwesomeIcon icon={faCheck}/>
            </button>

        </Container>
    )
}