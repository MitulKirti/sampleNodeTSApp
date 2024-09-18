"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_controller_1 = __importDefault(require("./user/user.controller"));
const app = (0, express_1.default)();
const port = 8080;
app.use(body_parser_1.default.json()); //for parsing application/json header
app.get('/api', (req, res) => {
    res.send('Welcome');
});
app.use('/api/users', user_controller_1.default);
app.listen(port, () => {
    console.log('Server running on port ', port);
});
//# sourceMappingURL=index.js.map