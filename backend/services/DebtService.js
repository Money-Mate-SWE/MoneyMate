import DebtBill from "../model/DebtBill.js";
import DebtItem from "../model/DebtItem.js";


class DebtService {
    static async createDebt(debtBillData, debtItemData) {
        const newDebt = new DebtBill(debtBillData);
        const savedDebt = await newDebt.save();
        debtItemData.debtBillId = savedDebt._id;

        const newDebtItem = new DebtItem(debtItemData);
        const savedDebtItem = await newDebtItem.save();
        return { savedDebt, savedDebtItem };
    }

    static async findDebtById(debtId) {
        return Debt.findById(debtId).sort({ createdAt: -1 }).exec();
    }

    static async findDebItemByDebtId(debtId) {
        return DebtItem.find({ debtBillId: debtId }).exec();
    }

    static async findDebtItemsByMultipleDebtIds(debtIds) {
        return DebtItem.find({ debtBillId: { $in: debtIds } }).exec();
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
            $and: [
                { $or: [{ lender: lenderName }, { borrower: lenderName }] },
                { $or: [{ status: "not paid" }, { status: "partially paid" }] }
            ]
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
                { $or: [{ status: "not paid" }, { status: "partially paid" }] }
            ]
        }).sort({ createdAt: -1 }).exec();
    }

    //update both billl and item
    static async updateDebt(debtId, updatedData) {
        return Debt.findByIdAndUpdate(debtId, updatedData).exec();
    }

    //delete both bill and item
    static async deleteDebt(debtId) {
        return Debt.deleteOne({ _id: debtId }).exec();
    }
}

export default DebtService;