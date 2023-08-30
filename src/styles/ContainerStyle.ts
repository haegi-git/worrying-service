import { styled } from "styled-components";

const PageContainer = styled.div`
    background-color: ${((props)=>props.theme.colors.background)};
    margin: auto;
    margin-top: 30px;
    border-radius: 15px;
    @media (max-width:768px) {
        width: 90%;
    }
    @media (min-width:769px) {
        width: 80%;
    }
    @media (min-width:1200px) {
        width:60%
    }
`
export default PageContainer