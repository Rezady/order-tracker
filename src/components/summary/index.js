import { Column, Text } from "../../styles/elements"
import { TitleSummary, ItemPurchased } from "./style";
import { Cell, TableRow, ButtonPayment } from "./style";
import { usePaymentStore } from "../../store/usePayment";
import { totalPrice } from "../../utils/numbers";
import { useEffect } from "react";
import { TIME_SHIPMENT } from "../../utils/constant";

const Summary = ({
  handleSubmit,
  navigate,
  textButton,
  shipment,
  deliveryEstimation,
  paymentMethod,
  isButton=true,
  disabledButton=true
}) => {
	const {
		isDropShipping,
		totalPayment,
		setDropShipping,
		setTotalPayment,
		shipmentChosen,
		paymentChosen
	} = usePaymentStore()
	const price = {
		priceDropshipping: isDropShipping ? 5900 : 0,
		costOfGoods: 50000,
		shipmentPrice: shipmentChosen?.price ?? 0
	}
	const {priceDropshipping, costOfGoods} = price

	useEffect(() => {
		setTotalPayment(totalPrice(price))
	}, [priceDropshipping, costOfGoods, shipmentChosen.price])

	return (
		<Column padding="0 0 0 20px" ratio={3} borderleft="1px solid #FF8A00">
			<Column ratio={6} gap="20px" width="50%">
				<Column ratio={2} borderbottom="1px solid #D8D8D8">
					<TitleSummary>Summary</TitleSummary>
					<ItemPurchased>10 items purchased</ItemPurchased>
				</Column>
				<Column ratio={2} gap="4px" borderbottom={shipmentChosen.title ? "1px solid #D8D8D8" : null}>
					{
						deliveryEstimation && shipmentChosen.title ? 
						<>
							<Text size="14px" weight="400" color="black">Delivery estimation</Text>
							<Text size="16px" weight="500" color="#1BD97B">
								{TIME_SHIPMENT[shipmentChosen.title] ?? ""} By {shipmentChosen.title}
							</Text>
						</> : null
					}
				</Column>
				<Column ratio={2} gap="4px">
				{
					paymentMethod ? 
					<>
						<Text size="14px" weight="400" color="black">Payment Method</Text>
						<Text size="16px" weight="500" color="#1BD97B">{paymentChosen}</Text>
					</> : null
					}
				</Column>
			</Column>
			<Column ratio={4} justifycontent={isButton ? "space-between" : 'flex-end'}>
				<table>
					<TableRow>
						<Cell opacity="0.6">Cost of goods</Cell>
						<Cell textalign="right" weight="700">{costOfGoods}</Cell>
					</TableRow>
					<TableRow>
						<Cell opacity="0.6">Dropshipping fee</Cell>
						<Cell textalign="right" weight="700">{priceDropshipping}</Cell>
					</TableRow>
					{shipment && shipmentChosen.title ? 
						<TableRow>
							<Cell opacity="0.6">{shipmentChosen.title} Shipment</Cell>
							<Cell textalign="right" weight="700">{shipmentChosen.price}</Cell>
						</TableRow> : null
					}
					<TableRow>
						<Cell color="#FF8A00" weight="700" fontSize="24px">Total</Cell>
						<Cell textalign="right" color="#FF8A00" weight="700" fontSize="24px">{totalPayment}</Cell>
					</TableRow>
				</table>
				{
					isButton ? 
						<ButtonPayment onClick={handleSubmit} disabled={disabledButton}>{textButton}</ButtonPayment> : null
				}
			</Column>
		</Column>
	)
}

export default Summary