import { Header, Back, PanelIndicator, CircleIndicator, TextIndicator } from "./style"
import { Row } from "../../styles/elements"

const indicator=["Delivery", "Payment", "Finisih"]

const Indicator = () => {
  return (
    <Header>
      <Back>Back</Back>
      <PanelIndicator>
        {
           indicator.map((value, key) => (
            <Row vertical="center" gap="10px">
              <CircleIndicator><p>{key+1}</p></CircleIndicator>
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