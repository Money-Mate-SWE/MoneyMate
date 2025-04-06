import express from 'express';
import expenseController from '../../Controller/expenseController.js';
const router = express.Router();

router.post('/newExpense', expenseController.createExpense);
router.get('/getexpense/:expenseId', expenseController.getExpenseById);
router.get('/getexpenseItems/:expenseId', expenseController.getExpenseItemsByExpenseId);
router.get('/getexpenseByStores/:user/:store', expenseController.getExpensesByStore); //Also provides the total amount of expenses in that store
router.get('/getExpensesByDateRangeAndUser/:dateRange', expenseController.getExpensesByDateRangeAndUser);
router.get('/expensesrange/date-range', expenseController.getExpensesByDateRangeAndUser);
router.put('/updateExpense/:expenseId', expenseController.updateExpense);
router.delete('/deleteExpense/:expenseId', expenseController.deleteExpense);
router.get('/getexpenseByUser/:user', expenseController.getExpenseByUser);


export default router;