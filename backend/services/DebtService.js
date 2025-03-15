import DebtBill from "../model/DebtBill.js";
import DebtItem from "../model/DebtItem.js";


class DebtService {
    static async createDebt(debtBillData, debtItemData) {
        const newDebt = new DebtBill(debtBillData);
        const savedDebt = await newDebt.save();
        debtItemData.BillId = savedDebt._id;

        const newDebtItem = new DebtItem(debtItemData);
        const savedDebtItem = await newDebtItem.save();
        return { savedDebt, savedDebtItem };
    }

    static async findDebtById(debtId) {
        return DebtBill.findById(debtId).sort({ createdAt: -1 }).exec();
    }

    static async findDebtItemsByDebtId(debtBillId) {
        return DebtItem.find({ BillId: debtBillId }).exec();
    }

    static async findDebtByMultipleDebtIds(debtIds) {
        return DebtBill.find({ _id: { $in: debtIds } }).exec();
    }

    static async findDebtsByLender(lenderId) {
        return DebtBill.find({
            $or: [
                { lender: lenderId },
                { borrower: lenderId }
            ]
        }).sort({ createdAt: -1 }).exec();
    }

    static async findPendingDebtsByLender(lenderId) {
        return DebtBill.find({
            $and: [
                { $or: [{ lender: lenderId }, { borrower: lenderId }] },
                { $or: [{ status: "not paid" }, { status: "partially paid" }] }
            ]
        }).sort({ createdAt: -1 }).exec();
    }

    static async findDebtsByLenderAndBorrower(lenderId, borrowerId) {
        return DebtBill.find({
            $and: [
                { $or: [{ lender: lenderId }, { borrower: lenderId }] },
                { $or: [{ lender: borrowerId }, { borrower: borrowerId }] }
            ]
        }).sort({ createdAt: -1 }).exec();
    }

    static async findPendingDebtsByLenderAndBorrower(lenderId, borrowerId) {
        return DebtBill.find({
            $and: [
                { $or: [{ lender: lenderId }, { borrower: lenderId }] },
                { $or: [{ lender: borrowerId }, { borrower: borrowerId }] },
                { $or: [{ status: "not paid" }, { status: "partially paid" }] }
            ]
        }).sort({ createdAt: -1 }).exec();
    }

    static async updateDebt(debtId, updatedData) {
        const updatedDebt = await DebtBill.findByIdAndUpdate(debtId, updatedData, { new: true }).exec();
        if (updatedData.items) {
            for (const item of updatedData.items) {
                await DebtItem.findByIdAndUpdate(item._id, item, { new: true }).exec();
            }
        }
        return updatedDebt;
    }

    static async deleteDebt(debtId) {
        await DebtItem.deleteMany({ BillId: debtId }).exec();
        return DebtBill.deleteOne({ _id: debtId }).exec();
    }
}
export default DebtService;