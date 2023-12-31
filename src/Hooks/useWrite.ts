import { addDoc, collection, documentId } from "firebase/firestore/lite";
import { db } from "../api/firebase";

import { userType } from "../types/userTypes";
import { postWriteType } from "../types/writeTypes";

type postWritePropsType = {
    writeValue: postWriteType,
    userState: userType,
    date: number,
    postName:string | null
}

type commentWritePropsType = {
    userState: userType,
    commentValue: string,
    detailCollection: string,
    detailId: string,
    date: number,
    commentName: string | null,
}
export default function useWrite(){

    const postWrite = async ({
        writeValue,
        userState,
        date,
        postName
    }:postWritePropsType) =>{
        try{
            const docRef = await addDoc(collection(db,writeValue.category),{
                title: writeValue.title,
                content: writeValue.content,
                category: writeValue.category,
                userUid: userState.userUid,
                date: date,
                postName: postName
            })

            return docRef
        } catch(error){
            console.error(`${error}에러 발생 했따`)
        }
    }

    const commentWrite = async ({
        userState,
        commentValue,
        detailCollection,
        detailId,
        date,
        commentName
    }:commentWritePropsType) =>{
        try{
            const docRef = await addDoc(collection(db,detailCollection,detailId,'comment'),{
                comment: commentValue,
                userUid: userState.userUid,
                date: date,
                commentName: commentName,
            })
            return docRef
        } catch(error){
            console.error(`${error}에러 발생 했따`)

        }
    }

    return{postWrite,commentWrite}
}