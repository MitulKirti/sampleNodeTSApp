import express from 'express';
import { createUser, getAllUsers, getUserById, removeUser, updateUser } from './user.service';
import { User } from './user.entity';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(getAllUsers());
});

router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const user = getUserById(id);
        res.json(user);
    } catch (error) {
        res.status(404).json(error);
    }
});

router.post('/', (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        createUser(body);
        res.json({ message: 'User created successfully' });
    }
    catch (error) {
        res.status(404).json(error);
    }
});

router.put('/:id', (req, res) => {
    try {
        const body = req.body as Omit<User, 'id'>;
        const id = parseInt(req.params.id);
        updateUser(id, body);
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(404).json(error);
    }
});

router.patch('/:id', (req, res) => {
    try {
        const body = req.body as Omit<User, 'id'>;
        const id = parseInt(req.params.id);
        updateUser(id, body);
        res.json({ message: 'User patched successfully' });
    } catch (error) {
        res.status(404).json(error);
    }
});

router.delete('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        removeUser(id);
        res.json({ message: 'User removed successfully' });
    } catch (error) {
        res.status(404).json(error);
    }
});

export default router;