import { ChangeEvent, useState } from "react";

import { useAppDispatch } from "../stores/store";
import { onChangePhotoURL } from "../stores/features/JoinButton/joinButtonSlice";

export default function usePreviewPhoto(){

    const dispatch = useAppDispatch()

    const [previewImg,setPreviewImg] = useState<any>();

        const handelPhoto = (e:ChangeEvent<HTMLInputElement>) =>{
            const fileName = e.target.files?.[0]

            if(fileName){
                dispatch(onChangePhotoURL(fileName))

                const reader = new FileReader();
                reader.readAsDataURL(fileName)
                return new Promise<void>((resolve)=>{
                    reader.onload = () =>{
                        setPreviewImg(reader.result)
                        resolve()
                    }
                })
            }
        }

        return {previewImg,setPreviewImg,handelPhoto}
}