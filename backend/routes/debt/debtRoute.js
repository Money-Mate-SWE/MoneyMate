import express from 'express';
import DebtService from '../../services/DebtService.js';
import UserService from '../../services/UserService.js';

const router = express.Router();

router.post('/newDebt', async (req, res) => {
    const lenderName = req.body.lender.trim();
    const borrowerName = req.body.borrower.trim();
    const amount = req.body.amount;
    const name = req.body.name.trim();

    if (!lenderName || !borrowerName || !amount || isNaN(amount) || !name) {
        return res.status(400).json({
            message: "Please enter name and amount!"
        });
    }

    const lenderObj = await UserService.findUserByUserName(lenderName);
    const borrowerObj = await UserService.findUserByUserName(borrowerName);

    if (!lenderObj || !borrowerObj) {
        return res.status(404).json({
            message: "User not found!"
        });
    }

    const lender = lenderObj._id;
    const borrower = borrowerObj._id;

    try {
        await DebtService.createDebt({ lender, borrower, name, amount });

        return res.status(201).json({
            message: "Debt created",
            lenderName,
            borrowerName,
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
    const lenderName = req.params.lender.trim();

    const lenderObj = await UserService.findUserByUserName(lenderName);

    if (!lenderObj) {
        return res.status(404).json({
            message: `No user found with username ${lenderName}!`
        });
    }

    const lender = lenderObj._id;

    try {
        const debts = await DebtService.findPendingDebtsByLender(lender);

        if (!debts || debts.length === 0) {
            return res.status(404).json({
                message: `No History for user ${lenderName} found!`
            });
        }

        return res.status(200).json({
            message: "Debts found",
            lenderName,
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
    const lenderName = req.params.lender.trim();
    const lenderObj = await UserService.findUserByUserName(lenderName);

    if (!lenderObj) {
        return res.status(404).json({
            message: `No user found with username ${lenderName}!`
        });
    }

    const lender = lenderObj._id;

    try {
        const debts = await DebtService.findDebtsByLender(lender);

        if (!debts || debts.length === 0) {
            return res.status(404).json({
                message: `No History for user ${lenderName} found!`
            });
        }

        return res.status(200).json({
            message: "Debts found",
            lenderName,
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

router.get('/getDebtByBorrower/:borrower', async (req, res) => {
    const borrowerName = req.params.borrower.trim();
    const lenderName = req.body.lender.trim();

    const borrowerObj = await UserService.findUserByUserName(borrowerName);
    const lenderObj = await UserService.findUserByUserName(lenderName);

    if (!borrowerObj || !lenderObj) {
        return res.status(404).json({
            message: `No users found with username ${borrowerName}!`
        });
    }

    const borrower = borrowerObj._id;
    const lender = lenderObj._id;

    try {
        const debts = await DebtService.findPendingDebtsByLenderAndBorrower(lender, borrower);

        if (!debts || debts.length === 0) {
            return res.status(404).json({
                message: `No history with user ${borrowerName} found!`
            });
        }

        return res.status(200).json({
            message: "Debts found",
            lenderName,
            borrowerName,
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

router.get('/getDebtHistoryByBorrower/:borrower', async (req, res) => {
    const borrowerName = req.params.borrower.trim();
    const lenderName = req.body.lender.trim();

    const borrowerObj = await UserService.findUserByUserName(borrowerName);
    const lenderObj = await UserService.findUserByUserName(lenderName);

    if (!borrowerObj || !lenderObj) {
        return res.status(404).json({
            message: `No users found with username ${borrowerName}!`
        });
    }

    const borrower = borrowerObj._id;
    const lender = lenderObj._id;

    try {
        const debts = await DebtService.findDebtsByLenderAndBorrower(lender, borrower);

        if (!debts || debts.length === 0) {
            return res.status(404).json({
                message: `No history with user ${borrowerName} found!`
            });
        }

        return res.status(200).json({
            message: "Debts found",
            lenderName,
            borrowerName,
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

    if (!req.body.status && !req.body.amount && !req.body.lender && !req.body.borrower) {
        return res.status(400).json({
            message: "Please enter status, amount, lender or borrower!"
        });
    }

    const debtExists = await DebtService.findDebtById(debtId);

    if (!debtExists) {
        return res.status(404).json({
            message: "Debt not found!"
        });
    }


    const updateData = {};

    if (req.body.status) updateData.status = req.body.status.trim();
    if (req.body.amount) updateData.amount = req.body.amount;
    if (req.body.lender) {
        const lender = await UserService.findUserByUserName(req.body.lender.trim());
        updateData.lender = lender._id;
    }
    if (req.body.borrower) {
        const borrower = await UserService.findUserByUserName(req.body.borrower.trim());
        updateData.borrower = borrower._id;
    }

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

    if (!await DebtService.findDebtById(debtId)) {
        return res.status(404).json({
            message: "Debt not found!"
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