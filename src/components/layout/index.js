import { styled } from "styled-components"

const Container = styled.div`
	background-color: white;
	box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
	border-radius: 4px;
  display: flex;
  flex: 1;
  width: 100%;
`

const Column = styled.div`
  display: flex;
  flex: ${props => props.width};
  background: ${props => props.color};
  flex-direction: column;
`

const Input = styled.input`
  placeholder: ${props => props.placeholder};
  padding: 20px 15px;
  border: 1px solid #CCCCCC;
  margin-bottom: 10px;
`

const Layout = ({children}) => {
	return (
		<Container>
      <Column width={7} color="blue" >
        {children}
      </Column>
      <Column width={3} color="yellow">
        {children}
      </Column>
		</Container>
	)
} 

export default Layout