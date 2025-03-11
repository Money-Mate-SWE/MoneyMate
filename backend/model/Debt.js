import mongoose from "mongoose";

const debtSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    lender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the user who is owed money
        required: true,
    },
    borrower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the user who owes money
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0.01, // Ensure the amount is positive
    },
    currency: {
        type: String,
        enum: ["USD", "EUR", "GBP", "INR"],
        default: "USD",
    },
    status: {
        type: String,
        enum: ["paid", "not paid"],
        default: "not paid",
    },
    description: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true
});

const Debt = mongoose.model("Debt", debtSchema);

export default Debt;