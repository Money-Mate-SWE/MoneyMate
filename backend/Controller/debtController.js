import DebtService from "../services/DebtService";

const createDebt = async (req, res) => {
    const { debtBillData, debtItemData } = req.body;

    if (!debtBillData?.name || !debtBillData?.amount || !debtBillData?.lender || !debtBillData?.participant) {
        return res.status(400).json({
            message: "Please enter all required Bill fields!"
        });
    }

    if (Array.isArray(debtBillData.participant) && debtBillData.participant.length < 1) {
        return res.status(400).json({
            message: "Please add at least one participants!"
        });
    }

    if (Array.isArray(debtItemData) || debtItemData.length > 1) {
        for (const item of debtItemData) {
            if (!item?.item || !item?.amount || !item?.borrower) {
                return res.status(400).json({
                    message: "Please enter all required Item fields!"
                });
            }
        }
    }

    try {
        const { savedDebt, savedDebtItem } = await DebtService.createDebt(debtBillData, debtItemData);
        return res.status(201).json({ savedDebt, savedDebtItem });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while creating the Debt!"
        });
    }
};

const getDebtById = async (req, res) => {
    const debtId = req.params.debtId.trim();

    if (!debtId) {
        return res.status(400).json({
            message: "Please enter Debt Id!"
        });
    }

    try {
        const debt = await DebtService.findDebtById(debtId);
        if (!debt) {
            return res.status(404).json({
                message: "Debt not found!"
            });
        }
        return res.status(200).json(debt);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debt!"
        });
    }
};

const getDebtItemsByDebtId = async (req, res) => {
    const debtId = req.params.debtId.trim();

    if (!debtId) {
        return res.status(400).json({
            message: "Please enter Debt Id!"
        });
    }

    try {
        const debtItems = await DebtService.findDebtItemsByDebtId(debtId);
        return res.status(200).json(debtItems);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debt Items!"
        });
    }
};

const getDebtByMultipleDebtIds = async (req, res) => {
    const debtIds = req.query.debtIds?.split(',');

    if (!Array.isArray(debtIds) || debtIds.length < 1) {
        return res.status(400).json({
            message: "Please enter Debt Ids!"
        });
    }

    try {
        const debtArray = await DebtService.findDebtByMultipleDebtIds(debtIds);
        return res.status(200).json(debtArray);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debt Items!"
        });
    }
};

const getDebtsByLender = async (req, res) => {
    const lenderId = req.params.lenderId.trim();

    if (!lenderId) {
        return res.status(400).json({
            message: "Please enter Lender Id!"
        });
    }

    try {
        const debts = await DebtService.findDebtsByLender(lenderId);
        return res.status(200).json(debts);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debts!"
        });
    }
};

const getPendingDebtsByLender = async (req, res) => {
    const lenderId = req.params.lenderId.trim();

    if (!lenderId) {
        return res.status(400).json({
            message: "Please enter Lender Id!"
        });
    }

    try {
        const debts = await DebtService.findPendingDebtsByLender(lenderId);
        return res.status(200).json(debts);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debts!"
        });
    }
};

const getDebtsByLenderAndBorrower = async (req, res) => {
    const { lenderId, borrowerId } = req.query;

    if (!lenderId || !borrowerId) {
        return res.status(400).json({
            message: "Please enter Lender and Borrower!"
        });
    }

    try {
        const debts = await DebtService.findDebtsByLenderAndBorrower(lenderId, borrowerId);
        return res.status(200).json(debts);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debts!"
        });
    }
};

const getPendingDebtsByLenderAndBorrower = async (req, res) => {
    const { lenderId, borrowerId } = req.query;

    if (!lenderId || !borrowerId) {
        return res.status(400).json({
            message: "Please enter Lender and Borrower!"
        });
    }

    try {
        const debts = await DebtService.findPendingDebtsByLenderAndBorrower(lenderId, borrowerId);
        return res.status(200).json(debts);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debts!"
        });
    }
};

const updateDebt = async (req, res) => {
    const debtId = req.params.debtId.trim();
    const updatedData = req.body;

    if (!debtId) {
        return res.status(400).json({
            message: "Please enter Debt Id!"
        });
    }

    if (!updatedData) {
        return res.status(400).json({
            message: "Please enter new data!"
        });
    }

    try {
        const updatedDebt = await DebtService.updateDebt(debtId, updatedData);
        return res.status(200).json(updatedDebt);
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while updating the Debt!"
        });
    }
};

const deleteDebt = async (req, res) => {
    const debtId = req.params.debtId.trim();

    if (!debtId) {
        return res.status(400).json({
            message: "Please enter Debt Id!"
        });
    }

    try {
        await DebtService.deleteDebt(debtId);
        return res.status(200).json({
            message: "Debt deleted successfully!"
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while deleting the Debt!"
        });
    }
};

export default {
    createDebt,
    getDebtById,
    getDebtItemsByDebtId,
    getDebtByMultipleDebtIds,
    getDebtsByLender,
    getPendingDebtsByLender,
    getDebtsByLenderAndBorrower,
    getPendingDebtsByLenderAndBorrower,
    updateDebt,
    deleteDebt
};