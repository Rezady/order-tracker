import { Column, Form, Text, Row } from "../../styles/elements"
import { Box } from "./style"
import Summary from "../../components/summary"
import { useNavigate } from "react-router-dom"
import { usePaymentStore } from "../../store/usePayment"
import { PAYMENT_COURIER, TIME_SHIPMENT } from "../../utils/constant"

const Payment = () => {
  const navigate = useNavigate()
  const {shipmentChosen, setShipmentChosen, paymentChosen, setPaymentChosen} = usePaymentStore()

  const handleClickBox = (key, details) => {
    if(key == 0) {
      setShipmentChosen(details)
    }
    if(key == 1) {
      setPaymentChosen(details.title)
    }
  }

  return (
    <Form>
      <Column ratio={7} padding="0 200px 0 0">
        {
          Object.keys(PAYMENT_COURIER).map((data, key) => (
            <Column ratio={3} key={key}>
              <Column>
                <Text weight="700" size="36px" color="#FF8A00">{data}</Text>
              </Column>
              <Row ratio={2} gap="20px">
                {
                  PAYMENT_COURIER[data].map((details, keyCourier) => (
                    <Box 
                      gap="3px"
                      onClick={() => handleClickBox(key, details)}
                      key={key+keyCourier}
                      choosen={shipmentChosen.title == details.title || 
                        paymentChosen == details.title ? '2px solid #1BD97B' : null}
                      color={shipmentChosen.title == details.title|| 
                        paymentChosen == details.title ? 'rgba(27, 217, 123, 0.1)' : null}
                      justifycontent="center"
                    >
                      <Text weight="500" size="13px" color="rgba(0, 0, 0, 0.6)">{details.title}</Text>
                      {details.price ? 
                        <Text weight="700" size="16px" color="rgba(45, 42, 64, 0.6)">
                          {details.price}
                        </Text> : null
                      }
                    </Box>
                  ))
                }
              </Row>
            </Column>
          ))
        }
        <Column></Column>
      </Column>
      <Summary
        textButton={`Pay with ${paymentChosen}`}
        shipment={true}
        deliveryEstimation={true} 
        handleSubmit={() => navigate('/finish')}
        disabledButton={!shipmentChosen.title}
      />
    </Form>
  )
}

export default Payment