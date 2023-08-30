import { collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";
import { db } from "../api/firebase";

type useDeleteCommentBtnProps = {
    category: any,
    id: any,
    commentCollection?: any,
    commentId?: any
}

type useDeletePostBtnProps = {
    category: any,
    id: any
}

export default function useDeleteBtn(){

        const commentDelete = async ({
            category,
            id,
            commentCollection,
            commentId}: useDeleteCommentBtnProps) => {
                //댓글 삭제 함수
            const commentRef = `${category}/${id}/${commentCollection}/${commentId}`
            const commentDocRef = doc(db,commentRef)

            try{
                await deleteDoc(commentDocRef)
            }catch(error){
                console.error(error)
            }
        }

        const postDelete = async ({category,id}:useDeletePostBtnProps) =>{
            // 게시글 삭제 함수
            const docRef = doc(db,category,id);
            try {
                // 게시글 내의 댓글 컬렉션 참조
                const commentsCollectionRef = collection(db, `${category}/${id}/comment`);
                const commentsQuerySnapshot = await getDocs(commentsCollectionRef);

                // 댓글 삭제 comment 컬렉션 내부의 댓글들을 모두 삭제해야 컬렉션이 삭제됨
                commentsQuerySnapshot.forEach(async commentDoc => {
                  await deleteDoc(commentDoc.ref);
                });

                // 문서 삭제 시 컬렉션도 같이 삭제가 되는 듯
                await deleteDoc(docRef);
              } catch (error) {
                console.error(error);
              }
        }

        return {commentDelete,postDelete}
}