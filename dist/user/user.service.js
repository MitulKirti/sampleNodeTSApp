"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.removeUser = removeUser;
const db_1 = __importDefault(require("../db"));
const users = [];
function getAllUsers() {
    // return users;
    return db_1.default.user.findMany();
}
;
function getUserById(id) {
    // const user = users.find((user) => user.id === id);
    // if (!user) {
    //     throw "User not found!";
    // }
    // return user;
    return db_1.default.user.findFirstOrThrow({ where: { id } });
}
function createUser(user) {
    // const id = users.length + 1;
    // users.push({ ...user, id });
    return db_1.default.user.create({ data: user });
}
function updateUser(id, user) {
    // const index = users.findIndex((user) => user.id === id);
    // if (index == -1) {
    //     throw ('User not found');
    // }
    // users[index] = { ...users[index], ...user };
    // return users[index];
    return db_1.default.user.update({
        where: { id },
        data: user,
    });
}
function removeUser(id) {
    // const index = users.findIndex((user) => user.id === id);
    // if (index == -1) {
    //     throw ('User not found');
    // }
    // users.splice(index, 1);
    return db_1.default.user.delete({ where: { id } });
}
//# sourceMappingURL=user.service.js.map