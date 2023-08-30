import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";
import { useEffectOnce } from "usehooks-ts";

export default function useDefaultPhoto(){

    const defaultImagePath = 'default/user.png';

    const storage = getStorage()

    const [defaultPhoto,setDefaultPhoto] = useState('')

    useEffectOnce(()=>{
        const getDefaultImageUrl = async () => {
            const defaultImageRef = ref(storage, defaultImagePath);
            const url = await getDownloadURL(defaultImageRef);
            return setDefaultPhoto(url);
        };
        getDefaultImageUrl()
    })

    return defaultPhoto

}