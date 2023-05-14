import { styled } from "styled-components"
import { Column } from "../../styles/elements"
export const Box = styled(Column)`
    border: ${props => props.choosen ?? "1px solid #CCCCCC"};
    box-sizing: border-box;
    padding: 12px 15px;
    column-gap: 10px;
    cursor: pointer;
    &:hover {
        background-color: #F2F2F2;;
    }
`