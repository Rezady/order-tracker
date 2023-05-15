import { styled } from "styled-components";

export const TitleSummary = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FF8A00;
`

export const ItemPurchased = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.6;
`

export const Cell = styled.td`
    font-weight: ${props => props.weight ?? "400"};
    font-size: ${props => props.fontSize ?? "14px"};
    color: ${props => props.color?? "#000000"};
    mix-blend-mode: normal;
    opacity: ${props => props.opacity?? "1"};
    padding: 6px 0px;
    text-align: ${props => props.textalign}
`

export const TableRow = styled.tr`
    margin-bottom: 12px;
`

export const ButtonPayment = styled.button`
    background: #FF8A00;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 3px 5px 10px rgba(255, 138, 0, 0.2);
    border-radius: 2px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
    padding: 20px 38px;
    margin-top: 30px;
    cursor: pointer;
    &:active {
        background-color: rgba(255, 138, 0, 0.9);
    }
    &:disabled {
        background-color: rgba(255, 138, 0, 0.4);
    }
`