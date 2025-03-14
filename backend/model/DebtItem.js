import mongoose from "mongoose";

const debtItemSchema = new mongoose.Schema({
    BillId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DebtBill",
        required: true
    },
    item: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0.01
    },
    currency: {
        type: String,
        enum: ["USD", "EUR", "GBP", "INR", "NPR"],
        default: "USD"
    },
    borrower: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }]
});