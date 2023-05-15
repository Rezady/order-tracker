import { styled } from "styled-components"
export const Column = styled.div`
    display: flex;
    flex: ${props => props.ratio ?? 1};
    background: ${props => props.color};
    flex-direction: column;
    gap: ${props => props.gap};
    padding: ${props => props.padding};
    align-items: ${props=>props.alignitems};
    justify-content: ${props=>props.justifycontent};
    border-left: ${props => props.borderleft};
    border-bottom: ${props => props.borderbottom};
    opacity: ${props => props.opacity};
    width: ${props => props.width};
    height: ${props => props.height};
    @media only screen and (max-width: 768px) {
        flex: 1;
        flex-wrap: wrap;
    }
`

export const Row = styled.div`
	display: flex;
	column-gap: ${props => props.gap};
	justify-content: ${props => props.horizontal ?? "flex-start"};
	align-items: ${props => props.vertical ?? "flex-start"};
    flex: ${props => props.ratio ?? 1};
    cursor: ${props => props.cursor};
    @media only screen and (max-width: 768px) {
        flex: 1;
        flex-wrap: wrap;
    }
`

export const Input = styled.input`
    padding: 20px 15px;
    border: 1px solid ${props => props.isvalid == true ? "#1BD97B" : props.isvalid == false ? "#FF8A00" : "#CCCCCC"};
    margin: 0;
    height: fit-content;
    cursor: ${props => props.cursor};
    &:focus {
        outline: none;
    } 
`

export const TextArea = styled.textarea`
    padding: 20px 15px;
    border: 1px solid ${props => props.isvalid == true ? "#1BD97B" : props.isvalid == false ? "#FF8A00" : "#CCCCCC"};
    margin: 0;
    resize: none;
    &:focus {
        outline: none;
    } 
`

export const Container = styled.div`
    background-color: white;
    box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    min-height: 78vh;
    width: 80%;
    gap: 30px;
    padding: 0 40px 20px 40px;
    @media only screen and (max-width: 768px) {
        flex: 1;
        flex-wrap: wrap;
        padding: 20px;
        padding-top: 80px;
    }
`

export const Form = styled.form`
    display: flex;
    flex: 1;
    gap: 30px;
    @media only screen and (max-width: 768px) {
        flex: 1;
        flex-wrap: wrap;
    }
`

export const Text = styled.form`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
    color: ${props => props.color};
    margin: ${props => props.margin};
    cursor: ${props => props.cursor};
    &:active {
        color: ${props => props.coloractive};
    }
`