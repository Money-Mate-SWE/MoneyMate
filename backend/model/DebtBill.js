import mongoose from "mongoose";

const debtBillSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        min: 0.01, // Ensure the amount is positive
    },
    currency: {
        type: String,
        enum: ["USD", "EUR", "GBP", "INR", "NPR"],
        default: "USD",
    },
    status: {
        type: String,
        enum: ["paid", "not paid", "partially paid"],
        default: "not paid",
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DebtItem",
    },
    description: {
        type: String,
        trim: true,
    },
    lender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    participant: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }],
}, {
    timestamps: true
});

const DebtBill = mongoose.model("Debt", debtBillSchema);

export default DebtBill;