import { Outlet } from "react-router-dom"
import { Container } from "../../styles/elements"
import Indicator from "../indicator"

const Layout = () => {
	return (
		<>
			<Container>
				<Indicator />
				<Outlet />
			</Container>
		</>
	)
} 

export default Layout