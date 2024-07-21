import builder from "../../../lib/builder"
import { PaymentStatus } from "../../generated/prisma-client"

 const PaymentStatusRef = builder.enumType('PaymentStatus', {
    values: Object.values(PaymentStatus)
})

export default PaymentStatusRef