"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_service_1 = require("./user.service");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield (0, user_service_1.getAllUsers)());
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield (0, user_service_1.getUserById)(id);
        res.json(user);
    }
    catch (error) {
        res.status(404).json(error);
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        yield (0, user_service_1.createUser)(body);
        res.json({ message: 'User created successfully' });
    }
    catch (error) {
        res.status(404).json(error);
    }
}));
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const id = req.params.id;
        yield (0, user_service_1.updateUser)(id, body);
        res.json({ message: 'User updated successfully' });
    }
    catch (error) {
        res.status(404).json(error);
    }
}));
router.patch('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const id = req.params.id;
        yield (0, user_service_1.updateUser)(id, body);
        res.json({ message: 'User patched successfully' });
    }
    catch (error) {
        res.status(404).json(error);
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield (0, user_service_1.removeUser)(id);
        res.json({ message: 'User removed successfully' });
    }
    catch (error) {
        res.status(404).json(error);
    }
}));
exports.default = router;
//# sourceMappingURL=user.controller.js.map