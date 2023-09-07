import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePreviewPhoto from "../../Hooks/usePreviewPhoto";

import { useAppDispatch, useAppSelector } from "../../stores/store";
import PageContainer from "../../styles/ContainerStyle";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";

import { auth } from "../../api/firebase";
import { User, updateProfile } from "firebase/auth";
import { onChangeProfileUserNickname, onChangeProfileUserPhoto } from "../../stores/features/profileState/profileStateSlice";
import { onChangeUserNickname, onChangeUserPhoto } from "../../stores/features/userState/userStateSlice";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    position: relative;
    div{
        width: 150px;
        height: 180px;
        display: flex;
        flex-direction: column;
        text-align: center;
        position: relative;
    }
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

    const profileState = useAppSelector((state)=>state.profileState)
    const userState = useAppSelector((state)=>state.userState)

    const dispatch = useAppDispatch()

    const storage = getStorage()

    const userPhoto = profileState.profileUserPhoto || '';
    const userPhotoFile:any = profileState.profileUserPhotoFile
    const userNickname = profileState.profileUserNickname || '';

    const {previewImg,setPreviewImg,handelPhoto} = usePreviewPhoto()

    const removeImg = () =>{
        setPreviewImg(userPhoto)
        dispatch(onChangeProfileUserPhoto(userState.userPhoto))
    }

    const handelNickname = (e: React.ChangeEvent<HTMLInputElement>) =>{
        dispatch(onChangeProfileUserNickname(e.target.value))
    }

    const onClickProfile = async () =>{
        try{
            if(userState.userUid){
                if(userPhotoFile){
                    const userPhotoUploadRef = ref(storage,`userPhoto/${userNickname}${userPhotoFile.name}`)
                    await uploadBytes(userPhotoUploadRef, userPhotoFile);

                    getDownloadURL(userPhotoUploadRef).then((url)=>{
                        const currentUser: User | null = auth.currentUser;
                        if(currentUser){
                            updateProfile(currentUser,{
                                displayName:userNickname,
                                photoURL:url
                            })
                            dispatch(onChangeUserNickname(userNickname))
                            dispatch(onChangeUserPhoto(url))
                            alert('프로필이 변경되었습니다.')
                        }
                    })
                }else{
                    const currentUser: User | null = auth.currentUser;
                    if(currentUser){
                        updateProfile(currentUser,{
                            displayName:userNickname,
                        })
                        dispatch(onChangeUserNickname(userNickname))
                        alert('프로필이 변경되었습니다.')
                    }
                }

            }else{
                alert('로그인 상태가 아닌 것 같습니다.')
            }

        }catch(error){
            console.error(error)
        }
    }

    return(
        <PageContainer>
            <Container>
                <div>
                <img src={typeof previewImg === "string" ? previewImg : userPhoto} alt="유저 이미지" />
                    {previewImg ? <FontAwesomeIcon onClick={removeImg} icon={faXmark} /> : null}
                <label htmlFor="userPhoto">이미지 변경</label>
                </div>
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