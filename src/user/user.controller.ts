import express from 'express';
import { createUser, getAllUsers, getUserById, removeUser, updateUser } from './user.service';
import { User } from './user.entity';

const router = express.Router();

router.get('/', async (req, res) => {
    res.json(await getAllUsers());
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        res.json(user);
    } catch (error) {
        res.status(404).json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        await createUser(body);
        res.json({ message: 'User created successfully' });
    }
    catch (error) {
        res.status(404).json(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const body = req.body as Omit<User, 'id'>;
        const id = req.params.id;
        await updateUser(id, body);
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(404).json(error);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const body = req.body as Omit<User, 'id'>;
        const id = req.params.id;
        await updateUser(id, body);
        res.json({ message: 'User patched successfully' });
    } catch (error) {
        res.status(404).json(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await removeUser(id);
        res.json({ message: 'User removed successfully' });
    } catch (error) {
        res.status(404).json(error);
    }
});

export default router;