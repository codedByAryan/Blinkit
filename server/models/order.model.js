import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    order_id: {
      type: String,
      required: [true, "Provide orderId"],
      unique: true, // Ensures each order has a unique ID
    },

    productId : {
        type : mongoose.Schema.ObjectId,
        ref: "product"
    },
    product_details : {
        name : String,
        image : Array,
    },

    paymentId: {
      type: String,
     default: ""
    },
    payment_status: {
      type: String,
      default: "",
    },
    delivery_address: {
      type: mongoose.Schema.Schema.ObjectId,
      ref: 'address',
      required: true,
    },

    // delivery_status: {
    //   type: String,
    //   enum: ["pending", "shipped", "delivered", "canceled"],
    //   default: "pending",
    // },


    subTotalAmt: {
      type: Number,
     default: 0
    },
    totalAmt: {
      type: Number,
      default: 0
    },
    invoice_receipt: {
      type: String,
      default: ""
    },
}, {
    timestamps : true
})

const OrderModel = mongoose.model('order', orderSchema)

export default OrderModel 