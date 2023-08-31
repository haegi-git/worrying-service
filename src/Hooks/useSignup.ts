import { createUserWithEmailAndPassword,
     getAuth, updateProfile } from "firebase/auth";

import { getDownloadURL, getStorage,ref, uploadBytes, } from 'firebase/storage'
import useDefaultPhoto from "./useDefaultPhoto";
import { useAppDispatch } from "../stores/store";
import { onChangeUserNickname, onChangeUserPhoto } from "../stores/features/userState/userStateSlice";

type useSignupProps = {
    email: string,
    password: string,
    nickname: string,
    userPhoto: File | undefined
}

export default function useSignup({email,password,nickname,userPhoto}:useSignupProps){

    const defaultPhoto = useDefaultPhoto()

    const dispatch = useAppDispatch()

    const signup = async () =>{
        const auth = getAuth();
        const storage = getStorage()
        try{
            const user = await createUserWithEmailAndPassword(auth,email,password);

            if(userPhoto){
                const userPhotoUploadRef = ref(storage,`userPhoto/${nickname}${userPhoto.name}`)
                await uploadBytes(userPhotoUploadRef, userPhoto);

                getDownloadURL(userPhotoUploadRef).then((url: string)=>{
                    updateProfile(user.user,{
                        displayName: nickname,
                        photoURL: url
                    })
                    dispatch(onChangeUserPhoto(url))
                    dispatch(onChangeUserNickname(nickname))
                })
            }else{
                updateProfile(user.user,{
                    displayName: nickname,
                    photoURL: defaultPhoto,
                })
                dispatch(onChangeUserPhoto(defaultPhoto))
                dispatch(onChangeUserNickname(nickname))
            }

            return user
        }catch(error){
            console.error(error)
            throw error
        }
    }

    return signup

}