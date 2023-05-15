import * as yup from "yup";

export const schemaDelivery = yup.object({
  email: yup.string().email().required('email must be filled'),
  phoneNumber: yup.string().min(6).max(20).matches(/^[0-9-+()]*$/).required('phone must be filled'),
  address: yup.string().min(3).required("address field must be filled"),
});