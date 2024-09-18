"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_service_1 = require("./user.service");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json((0, user_service_1.getAllUsers)());
});
router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const user = (0, user_service_1.getUserById)(id);
        res.json(user);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
router.post('/', (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        (0, user_service_1.createUser)(body);
        res.json({ message: 'User created successfully' });
    }
    catch (error) {
        res.status(404).json(error);
    }
});
router.put('/:id', (req, res) => {
    try {
        const body = req.body;
        const id = parseInt(req.params.id);
        (0, user_service_1.updateUser)(id, body);
        res.json({ message: 'User updated successfully' });
    }
    catch (error) {
        res.status(404).json(error);
    }
});
router.patch('/:id', (req, res) => {
    try {
        const body = req.body;
        const id = parseInt(req.params.id);
        (0, user_service_1.updateUser)(id, body);
        res.json({ message: 'User patched successfully' });
    }
    catch (error) {
        res.status(404).json(error);
    }
});
router.delete('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        (0, user_service_1.removeUser)(id);
        res.json({ message: 'User removed successfully' });
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.default = router;
//# sourceMappingURL=user.controller.js.map