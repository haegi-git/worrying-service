import PageContainer from "../../styles/ContainerStyle";
import WriteContent from "./WriteContent";
import WriteCreateBtn from "./WriteCreateBtn";
import WriteSelect from "./WriteSelect";
import WriteTitle from "./WriteTitle";

export default function WritePage(){
    return(
        <PageContainer>
            <WriteTitle/>

            <WriteSelect/>

            <WriteContent/>

            <WriteCreateBtn/>
        </PageContainer>
    )
}