import { styled } from 'styled-components'

import useDefaultPhoto from '../../Hooks/useDefaultPhoto'
import usePreviewPhoto from '../../Hooks/usePreviewPhoto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from '../../stores/store'
import { onChangePhotoURL } from '../../stores/features/signupState/signupStateSlice'

const Container = styled.div`
    width: 15rem;
    height: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:50px;
    margin: auto;
    position: relative;

    img{
        width: 100%;
        height: 100%;
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
`


export default function SignupPhoto(){

    const defaultPhoto = useDefaultPhoto()

    const dispatch = useAppDispatch()

    const {previewImg,setPreviewImg,handelPhoto} = usePreviewPhoto()

    const RemoveImg = () =>{
        setPreviewImg(undefined)
        dispatch(onChangePhotoURL(undefined))
    }


    return(
        <Container>
            <img src={previewImg ? previewImg : defaultPhoto} alt="유저 프로필 이미지" />
            {previewImg ? <FontAwesomeIcon onClick={RemoveImg} icon={faXmark} /> : null}
            <label htmlFor="signupPhoto">이미지 변경하기</label>
            <input
             type="file"
              id="signupPhoto"
               style={{display:'none'}}
               onChange={handelPhoto}/>
        </Container>
    )
}