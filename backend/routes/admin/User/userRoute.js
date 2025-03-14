import express from 'express';
import UserController from '../../userController.js';

const router = express.Router();

router.post('/newUser', UserController.createUser);

router.get('/getUserByUsername/:username', UserController.getUserByname);

router.get('/getUserById/:userId', UserController.getUserByUserId);

router.get('/getUserByEmail/:email', UserController.getUserByUserEmail );

router.put('/updateUser/:userId', UserController.updateUser );

router.delete('/deleteUser/:username', UserController.deleteUser  );

export default router;
