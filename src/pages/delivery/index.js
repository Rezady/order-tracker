import { useState } from "react"
import Summary from "../../components/summary"
import { Column, Row, Input, TextArea, Form} from "../../styles/elements"
import { TitleSection, TitleText, TextChecklist, CounterFields, Cell } from "./style"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaDelivery } from "../../utils/validations";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";

const Delivery = () => {
	const navigate = useNavigate()
	const [isDropshipper, setIsDropshipper] = useState(false)
	const { register, handleSubmit, formState, getFieldState, getValues, watch } = useForm({resolver: yupResolver(schemaDelivery)});
	const onSubmit = (data) => console.log(data)
	const addressWatch = watch("address");
	console.log('formState ', formState)
	// border={!getFieldState('email').isDirty ? null : getFieldState('email').invalid}
	
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Column ratio={7}>
				<TitleSection>
					<TitleText>Delivery Details</TitleText>
					<Row gap="9px" vertical="center">
						<Input type="checkbox" cursor="pointer" onClick={() => setIsDropshipper(!isDropshipper)} />
						<TextChecklist>Send as dropshipper</TextChecklist>
					</Row>
				</TitleSection>
				<Row gap="30px">
					<Column gap="10px" ratio={4}>
						<Input placeholder="Email" {...register('email', {
							 validate: (value, formValues) => value === '1'
						})} />
						<Input placeholder="Phone Number" {...register('phoneNumber')} />
						<TextArea rows={4} placeholder="Adress" maxLength={120} {...register('address')}/>
						<CounterFields>{addressWatch?.length ?? 0} / 120</CounterFields>
					</Column>
					
					<Column gap="10px" ratio={3}>
					{
						isDropshipper ? 
						<>
							<Input placeholder="Dropshipper Name" />
							<Input placeholder="Dropshipper Phone Number" />
						</> : null
					}
					</Column> 
				</Row>
			</Column>
			<Summary
				handleSubmit={handleSubmit}
        navigate={() => navigate('/payment')} 
        textButton="Continue to Payment"
      />
		</Form>
	)
}

export default Delivery