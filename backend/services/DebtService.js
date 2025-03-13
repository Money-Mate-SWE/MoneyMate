import Debt from "../model/Debt.js";

class DebtService {
    static async createDebt(debtData) {
        const newDebt = new Debt(debtData);
        return newDebt.save();
    }

    static async findDebtById(debtId) {
        return Debt.findById(debtId).sort({ createdAt: -1 }).exec();
    }

    static async findDebtsByLender(lenderName) {
        return Debt.find({
            $or: [
                { lender: lenderName },
                { borrower: lenderName }
            ]
        }).sort({ createdAt: -1 }).exec();
    }

    static async findPendingDebtsByLender(lenderName) {
        return Debt.find({
            $or: [
                { lender: lenderName },
                { borrower: lenderName }
            ],
            status: "not paid"
        }).sort({ createdAt: -1 }).exec();
    }

    static async findDebtsByLenderAndBorrower(lenderName, borrowerName) {
        return Debt.find({
            $and: [
                { $or: [{ lender: lenderName }, { borrower: lenderName }] },
                { $or: [{ lender: borrowerName }, { borrower: borrowerName }] }
            ]
        }).sort({ createdAt: -1 }).exec();
    }

    static async findPendingDebtsByLenderAndBorrower(lenderName, borrowerName) {
        return Debt.find({
            $and: [
                { $or: [{ lender: lenderName }, { borrower: lenderName }] },
                { $or: [{ lender: borrowerName }, { borrower: borrowerName }] },
                { status: "not paid" }
            ]
        }).sort({ createdAt: -1 }).exec();
    }

    static async updateDebt(debtId, updatedData) {
        return Debt.findByIdAndUpdate(debtId, updatedData).exec();
    }

    static async deleteDebt(debtId) {
        return Debt.deleteOne({ _id: debtId }).exec();
    }
}

export default DebtService;