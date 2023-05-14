import { Header, Back, PanelIndicator, CircleIndicator, TextIndicator } from "./style"
import { Row } from "../../styles/elements"
import { INDICATOR } from "../../utils/constant"
import { useLocation, useRoutes } from "react-router-dom"
import { getActive } from "../../utils/string"

const Indicator = () => {
  const {pathname} = useLocation()
  

  return (
    <Header>
      <Back>Back</Back>
      <PanelIndicator>
        {
           INDICATOR.map((value, key) => (
            <Row vertical="center" gap="10px" key={key}>
              <CircleIndicator active={getActive(key, pathname)}>
                <p active={getActive(key, pathname)}>{key+1}</p>
              </CircleIndicator>
              <TextIndicator>{value}</TextIndicator>
            </Row>
           )) 
        }
      </PanelIndicator>
      <div></div>
    </Header>
  )
}

export default Indicator