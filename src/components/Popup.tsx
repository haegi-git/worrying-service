import { styled } from "styled-components"

const Container = styled.div`
    position: fixed;
    top:50%;
    left: 50%;
    width: 300px;
    height: 100px;
    background-color: aqua;
    transform: translate(-50%,-50%);
    border-radius: 15px;
    text-align: center;
    p{
        padding:15px;
        padding-bottom: 0px;
    }
    button{
        margin-left:15px;
        margin-right: 15px;
        padding: 5px 15px;
    }
`

type PopupPropsType = {
    text: string,
    buttonText: string,
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    button: ()=> void
}

export default function Popup({text,buttonText,setState,button}:PopupPropsType){
    return(
        <Container>

            <p>
                {text}
            </p>

            <button onClick={button}>{buttonText}</button>
            <button onClick={()=>{setState(false)}}>취소</button>

        </Container>
    )
}