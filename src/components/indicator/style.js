import { styled } from "styled-components";

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: fit-content;
    position: relative;
    padding-top: 10px;
`

export const Back = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
`

export const PanelIndicator = styled.div`
    background: #FFFAE6;
    border-radius: 0 0 35px 35px;
    width: 40%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    margin: auto;
`

export const CircleIndicator = styled.span`
    background: rgba(255, 138, 0, 0.2);
    mix-blend-mode: normal;
    /* opacity: 0.2; */
    border-radius: 15px;
    height: 30px;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        /* z-index: 1; */
        font-weight: 500;
        font-size: 16px;
        text-align: center;
        color: #FF8A00;
        /* opacity: 1 !important; */
    }
`

export const TextIndicator = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #FF8A00;
`