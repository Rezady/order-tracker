import { Column, Form, Text, Row } from "../../styles/elements"
import { Box } from "./style"
import Summary from "../../components/summary"
import { useNavigate } from "react-router-dom"

const paymentCourier = {
  Shipment: [
    {title: "Go-Send", price: "15000"},
    {title: "JNE", price: "19000"},
    {title: "Personal ", price: "29000"}
  ],
  Payment: [
    {title: "E-Wallet", price: "15000000 Left"},
    {title: "Bank Transer", price: ""},
    {title: "Virtual Account", price: ""}
  ]
}

const Payment = () => {
  const navigate = useNavigate()
  const handleClickBox = () => {

  }
  return (
    <Form>
      <Column ratio={7} padding="0 200px 0 0">
        {
          Object.keys(paymentCourier).map((data, key) => (
            <Column ratio={3} key={key}>
              <Column>
                <Text weight="700" size="36px" color="#FF8A00">{data}</Text>
              </Column>
              <Row ratio={2} gap="20px">
                {
                  paymentCourier[data].map((details, key) => (
                    <Box gap="3px" onClick={handleClickBox}>
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
        textButton="Pay with e-Wallet"
        shipment={true}
        deliveryEstimation={true} 
        navigate={() => navigate('/finish')}
      />
    </Form>
  )
}

export default Payment