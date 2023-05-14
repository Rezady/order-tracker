import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const initialState = {
    isDropShipping: false,
    totalPayment: 0,
    shipmentChosen: {},
    paymentChosen: "",
}
export const usePaymentStore = create(
  persist(
    (set, get) => ({
        ...initialState,
        setDropShipping: () => set((prevState) => ({ ...prevState, isDropShipping: !get().isDropShipping })),
        setTotalPayment: (newValue) => set((prevState) => ({ ...prevState, totalPayment: newValue })),
        setShipmentChosen: (newValue) => set((prevState) => ({ ...prevState, shipmentChosen: newValue })),
        setPaymentChosen: (newValue) => set((prevState) => ({ ...prevState, paymentChosen: newValue })),
        clearState: () => set(initialState)
    }),
    {
      name: 'payment-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

