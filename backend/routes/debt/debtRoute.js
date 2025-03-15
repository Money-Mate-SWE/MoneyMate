import express from 'express';
import DebtController from '../../Controller/debtController.js';
const router = express.Router();

router.post('/newDebt', DebtController.createDebt);

router.get('/getDebt/:debtId', DebtController.getDebtById);

router.get('/getDebtItemsByDebtId/:debtId', DebtController.getDebtItemsByDebtId);

router.get('/getDebtByMultipleDebtIds', DebtController.getDebtByMultipleDebtIds);

router.get('/getDebt/:lender', DebtController.getPendingDebtsByLender);

router.get('/getDebtHistory/:lender', DebtController.getDebtsByLender);

router.get('/getDebtByBorrower', DebtController.getPendingDebtsByLenderAndBorrower);

router.get('/getDebtHistoryByBorrower', DebtController.getDebtsByLenderAndBorrower);

router.put('/updateDebt/:debtId', DebtController.updateDebt);

router.delete('/deleteDebt/:debtId', DebtController.deleteDebt);

export default router;