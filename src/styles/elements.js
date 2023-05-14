import { styled } from "styled-components"
export const Column = styled.div`
    display: flex;
    flex: ${props => props.ratio ?? 1};
    background: ${props => props.color};
    flex-direction: column;
    gap: ${props => props.gap};
    padding: ${props => props.padding};
    align-items: ${props=>props.alignItems};
    justify-content: ${props=>props.justifyContent};
    border-left: ${props => props.borderLeft};
    border-bottom: ${props => props.borderBottom};
    opacity: ${props => props.opacity};
    width: ${props => props.width};
    height: ${props => props.height};
`

export const Row = styled.div`
	display: flex;
	column-gap: ${props => props.gap};
	justify-content: ${props => props.horizontal ?? "flex-start"};
	align-items: ${props => props.vertical ?? "flex-start"};
    flex: ${props => props.ratio ?? 1};
`

export const Input = styled.input`
    padding: 20px 15px;
    border: 1px solid ${props => props.isValid == true ? "#1BD97B" : props.isValid == false ? "#FF8A00" : "#CCCCCC"};
    margin: 0;
    height: fit-content;
    cursor: ${props => props.cursor};
    &:focus {
        outline: none;
    } 
`

export const TextArea = styled.textarea`
    padding: 20px 15px;
    border: 1px solid ${props => props.isValid == true ? "#1BD97B" : props.isValid == false ? "#FF8A00" : "#CCCCCC"};
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
`

export const Form = styled.form`
    display: flex;
    flex: 1;
    gap: 30px;
`

export const Text = styled.form`
    font-weight: ${props => props.weight};
    font-size: ${props => props.size};
    color: ${props => props.color};
    margin: ${props => props.margin};
`