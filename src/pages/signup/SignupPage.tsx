import PageContainer from "../../styles/ContainerStyle"
import SignupPhoto from "./SignupPhoto"
import SignupTextField from "./SignupTextField"
import SignupButton from "./SignupButton"

export default function SignupPage(){

    return(
        <PageContainer>

            <SignupPhoto/>

            <SignupTextField/>

            <SignupButton />

        </PageContainer>
    )
}