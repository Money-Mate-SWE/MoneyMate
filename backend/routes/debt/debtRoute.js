import express from 'express';
import DebtService from '../../../services/DebtService.js';

const router = express.Router();

router.post('/newDebt', async (req, res) => {
    const lender = req.body.lender.trim();
    const borrower = req.body.borrower.trim();
    const amount = req.body.amount.trim();
    const name = req.body.name.trim();

    if (!lender || !borrower || !amount || isNaN(amount) || !name) {
        return res.status(400).json({
            message: "Please enter name and amount!"
        });
    }

    try {
        await DebtService.createDebt({ lender, borrower, name, amount });

        return res.status(201).json({
            message: "Debt created",
            lender,
            borrower,
            name,
            amount
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while saving the Debt!"
        });
    }
});

router.get('/getDebt/:lender', async (req, res) => {
    const lender = req.params.lender.trim();

    try {
        const debts = await DebtService.findPendingDebtsByLender(lender);

        if (!debts || debts.length === 0) {
            return res.status(404).json({
                message: `No History for user ${lender} found!`
            });
        }

        return res.status(200).json({
            message: "Debts found",
            debts
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debts!"
        });
    }
}
);

router.get('/getDebtHistory/:lender', async (req, res) => {
    const lender = req.params.lender.trim();

    try {
        const debts = await DebtService.findDebtsByLender(lender);

        if (!debts || debts.length === 0) {
            return res.status(404).json({
                message: `No History for user ${lender} found!`
            });
        }

        return res.status(200).json({
            message: "Debts found",
            debts
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debts!"
        });
    }
}
);

router.get('getDebtByBorrower/:borrower', async (req, res) => {
    const borrower = req.params.borrower.trim();
    const lender = req.body.lender.trim();

    try {
        const debts = await DebtService.findPendingDebtsByLenderAndBorrower(lender, borrower);

        if (!debts || debts.length === 0) {
            return res.status(404).json({
                message: `No history with user ${borrower} found!`
            });
        }

        return res.status(200).json({
            message: "Debts found",
            debts
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debts!"
        });
    }
}
);

router.get('getDebtHistoryByBorrower/:borrower', async (req, res) => {
    const borrower = req.params.borrower.trim();
    const lender = req.body.lender.trim();

    try {
        const debts = await DebtService.findDebtsByLenderAndBorrower(lender, borrower);

        if (!debts || debts.length === 0) {
            return res.status(404).json({
                message: `No history with user ${borrower} found!`
            });
        }

        return res.status(200).json({
            message: "Debts found",
            debts
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while fetching the Debts!"
        });
    }
}
);

router.put('/updateDebt/:debtId', async (req, res) => {
    const debtId = req.params.debtId.trim();

    if (!debtId) {
        return res.status(400).json({
            message: "Please enter debtId!"
        });
    }

    const updateData = {};

    if (req.body.status) updateData.status = req.body.status.trim();
    if (req.body.amount) updateData.amount = req.body.amount.trim();
    if (req.body.lender) updateData.lender = req.body.lender.trim();
    if (req.body.borrower) updateData.borrower = req.body.borrower.trim();

    try {
        await DebtService.updateDebt(debtId, updateData);

        return res.status(200).json({
            message: "Debt updated",
            updateData
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while updating the Debt!"
        });
    }
});

router.delete('/deleteDebt/:debtId', async (req, res) => {
    const debtId = req.params.debtId.trim();

    if (!debtId) {
        return res.status(400).json({
            message: "Please enter debtId!"
        });
    }

    try {
        await DebtService.deleteDebt(debtId);

        return res.status(200).json({
            message: "Debt deleted",
            debtId
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "There was an error while deleting the Debt!"
        });
    }
});

export default router;