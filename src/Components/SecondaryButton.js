import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFFF;
        width: 217px;
        height: 34px;
        border: 1px solid rgba(100, 116, 139, 1);
        border-radius: 24px;
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            background: #FFFFFF;
            opacity: 0.8;
        }
        &:active {
            background: rgba(100, 116, 139, 0.4);
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;