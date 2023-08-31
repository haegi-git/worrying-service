import { doc, updateDoc } from 'firebase/firestore/lite'
import { db } from '../api/firebase'
import { userType } from '../types/userTypes'

type useEditBtnType = {
    editData: {
        editTitle: string,
        editContent: string,
        editCategory: string,
    }
    userState: userType;
    category: string,
    id: string,
}

export default async function useEditBtn
({editData,userState,category,id}: useEditBtnType){

    try{
        const docRef = doc(db,category,id)
        await updateDoc(docRef,{
            content: editData.editContent,
            title: editData.editTitle,
            category: category
        })
        console.log(category)
    }catch(error){
        console.log(error)
        console.log(editData)
        console.log(category,id)
    }

}