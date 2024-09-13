import express from 'express';
import {getUsers, insertUser, deleteUser ,updateUser} from '../controllers/users.js'; 

const router = express.Router();

router.get('/', getUsers);
router.post('', insertUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;
