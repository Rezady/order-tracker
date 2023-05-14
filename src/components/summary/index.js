import { Column, Row, Input } from "../../styles/elements"
import { TitleSummary, ItemPurchased } from "./style";
import { Cell, TableRow, ButtonPayment } from "./style";

const Summary = ({handleSubmit, navigate, textButton}) => {
	const onSubmit = data => {
		console.log(data)
		navigate()
	};
	return (
		<Column padding="0 0 0 20px" ratio={3} borderLeft="1px solid #FF8A00">
			<Column ratio={6}>
				<TitleSummary>Summary</TitleSummary>
				<ItemPurchased>10 items purchased</ItemPurchased>
			</Column>
			<Column ratio={4} justifyContent="space-between">
				<table>
					<TableRow>
						<Cell opacity="0.6">Cost of goods</Cell>
						<Cell weight="700">500000</Cell>
					</TableRow>
					<TableRow>
						<Cell opacity="0.6">Dropshipping fee</Cell>
						<Cell weight="700">5900</Cell>
					</TableRow>
					<TableRow>
						<Cell color="#FF8A00" weight="700" fontSize="24px">Total</Cell>
						<Cell color="#FF8A00" weight="700" fontSize="24px">500000</Cell>
					</TableRow>
				</table>
				<ButtonPayment 
					type="submit"
					// onSubmit={handleSubmit(onSubmit)}
					onClick={navigate}
				>
					{textButton}
				</ButtonPayment>
			</Column>
		</Column>
	)
}

export default Summary