import { PaymentPanel } from "../../modules/PaymentModule/PaymentPanel"
import { PaymentTable } from "../../modules/PaymentModule/PaymentTable"

export const PaymentPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <PaymentTable />
      <PaymentPanel />
    </div>
  )
}