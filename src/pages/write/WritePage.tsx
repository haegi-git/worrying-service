import { useEffectOnce } from "usehooks-ts";
import PageContainer from "../../styles/ContainerStyle";
import WriteContent from "./WriteContent";
import WriteCreateBtn from "./WriteCreateBtn";
import WriteSelect from "./WriteSelect";
import WriteTitle from "./WriteTitle";
import { useAppSelector } from "../../stores/store";
import { useNavigate } from "react-router-dom";

export default function WritePage(){

    const userState = useAppSelector((state)=>state.userState)
    const navigate = useNavigate()

    useEffectOnce(()=>{
        if(!userState.userUid){
            alert('로그인이 필요합니다.')
            navigate('/')
        }
    })
    return(
        <PageContainer>
            <WriteTitle/>

            <WriteSelect/>

            <WriteContent/>

            <WriteCreateBtn/>
        </PageContainer>
    )
}