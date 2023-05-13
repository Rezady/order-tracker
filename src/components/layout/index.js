import { Outlet } from "react-router-dom"
import { styled } from "styled-components"
import { Column } from "../../styles/elements"

const Container = styled.div`
	background-color: white;
	box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
	border-radius: 4px;
  display: flex;
  width: 90%;
  height: 90%;
  gap: 30px;
  padding: 20px 40px;
`

const Layout = () => {
	return (
		<Container>
      <Outlet />
		</Container>
	)
} 

export default Layout