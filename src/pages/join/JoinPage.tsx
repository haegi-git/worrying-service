import PageContainer from "../../styles/ContainerStyle"
import JoinPhoto from "./JoinPhoto"
import JoinTextField from "./JoinTextField"
import JoinButton from "./JoinButton"

export default function JoinPage(){

    return(
        <PageContainer>

            <JoinPhoto/>

            <JoinTextField/>

            <JoinButton />

        </PageContainer>
    )
}