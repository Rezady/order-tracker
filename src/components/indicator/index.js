import { Header, Back, PanelIndicator, CircleIndicator, TextIndicator } from "./style"
import { Row } from "../../styles/elements"
import { INDICATOR } from "../../utils/constant"
import { useLocation, useNavigate } from "react-router-dom"
import { getActive, goBack } from "../../utils/string"

const Indicator = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  

  return (
    <Header>
      {pathname == '/finish' ? null :
        <Row vertical="center" cursor="pointer" onClick={() => goBack(pathname, navigate)}>
          <img src='/assets/chevron-left.svg' alt="" />
          <Back>Back</Back>
        </Row>
        
      }
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