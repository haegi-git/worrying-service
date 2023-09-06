import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePreviewPhoto from "../../Hooks/usePreviewPhoto";

import { useAppDispatch, useAppSelector } from "../../stores/store";
import PageContainer from "../../styles/ContainerStyle";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";

import { auth } from "../../api/firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { onChangeProfileUserNickname, onChangeProfileUserPhoto } from "../../stores/features/profileState/profileStateSlice";
import { onChangeUserNickname } from "../../stores/features/userState/userStateSlice";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    position: relative;
    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-bottom: 15px;
    }
    svg{
        position: absolute;
        top:0;
        right: 0;
        font-size: 1.5em;
        cursor: pointer;
    }
    label{
        margin-bottom: 30px;
    }
    input{
        padding:15px;
        font-size: 1.5em;
        border: none;
        background-color: ${((props)=>props.theme.colors.background)};
        border-bottom: 1px solid black;
        outline: none;
    }
    button{
        margin-top: 30px;
        width: 150px;
        height: 50px;
        border-radius: 15px;
        background-color: ${((props)=>props.theme.colors.mainColor)};
        border:${((props)=>props.theme.border.grayBorder)};
        cursor: pointer;
    }
    @media (max-width:768px){
        input{
            width: 70%;
        }
    }
`

export default function MyPage(){

    const userState = useAppSelector((state)=>state.profileState)

    const dispatch = useAppDispatch()

    const userPhoto = userState.profileUserPhoto || '';

    const userNickname = userState.profileUserNickname || '';

    const {previewImg,setPreviewImg,handelPhoto} = usePreviewPhoto()

    const removeImg = () =>{
        setPreviewImg(undefined)
        dispatch(onChangeProfileUserPhoto(undefined))
    }

    const handelNickname = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(onChangeProfileUserNickname(e.target.value))
    }

    const onClickProfile = () =>{
        onAuthStateChanged(auth,(user)=>{
            if(user?.uid === userState.profileUserUid){
                updateProfile(user,{
                    displayName: userNickname,
                })
                dispatch(onChangeUserNickname(userNickname))
                console.log(user)
            }else{
                alert('로그인 상태가 아닌거같습니다.')
            }
        })
    }

    return(
        <PageContainer>
            <Container>
                <img src={typeof previewImg === "string" ? previewImg : userPhoto} alt="유저 이미지" />
                    {previewImg ? <FontAwesomeIcon onClick={removeImg} icon={faXmark} /> : null}
                <label htmlFor="userPhoto">이미지 변경</label>
                <input
                    id="userPhoto"
                    type="file"
                    style={{display:'none'}}
                    onChange={handelPhoto} />
                <input type="text"
                value={userNickname}
                onChange={handelNickname} />

                <button onClick={onClickProfile}>
                    변경하기
                </button>
            </Container>
        </PageContainer>
    )
}