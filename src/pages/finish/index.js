import Summary from "../../components/summary"
import { Column, Row, Text } from "../../styles/elements"
import { generateRandom } from "../../utils/string"
import { TIME_SHIPMENT } from "../../utils/constant"
import { usePaymentStore } from "../../store/usePayment"
import { useNavigate } from "react-router-dom"

const Finish = () => {
  const {shipmentChosen, clearState} = usePaymentStore()
  const navigate = useNavigate()
  const backHomepage = () => {
    navigate('/')
    clearState()
  }
  return (
    <Row gap="30px" vertical="space-between">
      <Column ratio={7} justifyContent="center" alignItems="center" gap="60px">
        <Column justifyContent="center">
          <Text size="36px" weight="700" color="#FF8A00">Thank You</Text>
          <Text weight="400" size="14px" margin="26px 0 0 0">Order ID : {generateRandom(5)}</Text>
          <Text weight="400" size="14px" color="rgba(0, 0, 0, 0.6)" margin="10px 0 0 0">
            Your order will be delivered {TIME_SHIPMENT[shipmentChosen.title]} with {shipmentChosen.title}
          </Text>
          <Text margin="60px 0 0 0" size="14px" color="rgba(0, 0, 0, 0.6)" onClick={backHomepage}>Go to homepage</Text>
        </Column>
      </Column>
      <Summary
        textButton="Pay with e-Wallet"
        shipment={true}
        deliveryEstimation={true}
        paymentMethod={true}
        isButton={false}
      />
    </Row>
  )
}

export default Finish