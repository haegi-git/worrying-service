import { doc, updateDoc } from 'firebase/firestore/lite'
import { db } from '../api/firebase'

export default async function useEditBtn
(editData: any,userState: any,category: any,id:any){

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