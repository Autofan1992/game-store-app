import builder from '../../../lib/builder'
import PaymentStatusRef from '../common/PaymentStatus'
import { OrderStatusRef } from './Order'

const PatchOrderInputRef = builder.inputType('PatchOrderInput', {
    fields: (t) => ({
        id: t.string({ required: true }),
        status: t.field({ type: OrderStatusRef }),
        paymentStatus: t.field({ type: PaymentStatusRef })
    })
})

export default PatchOrderInputRef
