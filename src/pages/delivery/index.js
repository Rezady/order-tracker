import Summary from "../../components/summary"
import { Column, Row, Input, TextArea, Form} from "../../styles/elements"
import { TitleSection, TitleText, TextChecklist, CounterFields, Cell } from "./style"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaDelivery } from "../../utils/validations";
import { useNavigate } from "react-router-dom";
import { usePaymentStore } from "../../store/usePayment";

const Delivery = () => {
	const navigate = useNavigate()
	const { 
    register,
    handleSubmit,
    formState: {isValid, errors, touchedFields},
    getFieldState,
    getValues,
    watch
  } = useForm({mode: "all", resolver: yupResolver(schemaDelivery)});

	const onSubmit = (data) => console.log(data)
	const addressWatch = watch("address");
	const {isDropShipping, setDropShipping} = usePaymentStore()

  getFieldState("email");
  getFieldState("phoneNumber");
  getFieldState("address");
	
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Column ratio={7}>
				<TitleSection>
					<TitleText>Delivery Details</TitleText>
					<Row gap="9px" vertical="center" horizontal="flex-end" >
						<Input
              type="checkbox"
              cursor="pointer"
              defaultChecked={isDropShipping}
              onClick={() => setDropShipping()} 
            />
						<TextChecklist>Send as dropshipper</TextChecklist>
					</Row>
				</TitleSection>
				<Row gap="30px">
					<Column gap="10px" ratio={4}>
						<Input 
              placeholder="Email" 
              {...register('email')}
              isValid={!getFieldState("email").isTouched ? null : !getFieldState("email").invalid}
            />
						<Input
              placeholder="Phone Number"
              {...register('phoneNumber')}
              isValid={!getFieldState("phoneNumber").isTouched ? null : !getFieldState("phoneNumber").invalid}
            />
						<TextArea
              {...register('address')}
              rows={4}
              placeholder="Address"
              maxLength={120}
              isValid={getFieldState("address").error}
            />
						<CounterFields>{addressWatch?.length ?? 0} / 120</CounterFields>
					</Column>
					
					<Column gap="10px" ratio={3}>
					{
						isDropShipping ? 
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