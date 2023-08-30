import PageContainer from "../../styles/ContainerStyle";

import EditBtn from "./EditBtn";
import EditContent from "./EditContent";
import EditTitle from "./EditTitle";


export default function EditPage(){
    return(
        <PageContainer>
            <EditTitle/>
            <EditContent/>
            <EditBtn/>
        </PageContainer>
    )
}