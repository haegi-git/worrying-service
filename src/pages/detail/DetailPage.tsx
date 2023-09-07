import { useParams } from "react-router-dom";

import PageContainer from "../../styles/ContainerStyle";

import useFetchDetailData from "../../Hooks/useFetchDetailData";

import DetailButton from "./DetailButton";
import { useAppSelector } from "../../stores/store";
import DetailComment from "./DetailComment";
import useFetchDetailCommentData from "../../Hooks/useFetchDetailCommentData";
import DetailContent from "./DetailContent";


export default function DetailPage(){
    const { id, category } = useParams<{ id?: string; category?: string }>();

    // 파라미터가 없을 경우 빈 문자열("")로 대체
    const categoryId = category ?? "";
    const itemId = id ?? "";

    const detailData = useFetchDetailData({collectionName: category, dataId: id})

    const userState = useAppSelector((state)=>state.userState)
    useFetchDetailCommentData({ collectionName : categoryId, docId: itemId})


    if (!detailData) {
    return (
        <PageContainer>
            <p>Loading...</p>
        </PageContainer>
    );
}

return (
    <PageContainer>

        <DetailContent
        title={detailData.title}
        content={detailData.content}
        date={detailData.date}
        postName={detailData.postName}
        category={category}/>

        {userState.userUid === detailData.userUid ?
        <DetailButton
         detailData={detailData}
          category={categoryId}
           id={itemId}
           userUid={userState.userUid}/> : null}

        <DetailComment
         category={categoryId}
          id={itemId}
          detailUserUid={detailData.userUid}
          postName={detailData.postName}
         />


    </PageContainer>
);
}