"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.createUser = createUser;
exports.updateUser = updateUser;
exports.removeUser = removeUser;
const users = [];
function getAllUsers() {
    return users;
}
;
function getUserById(id) {
    const user = users.find((user) => user.id === id);
    if (!user) {
        throw "User not found!";
    }
    return user;
}
function createUser(user) {
    const id = users.length + 1;
    users.push(Object.assign(Object.assign({}, user), { id }));
}
function updateUser(id, user) {
    const index = users.findIndex((user) => user.id === id);
    if (index == -1) {
        throw ('User not found');
    }
    users[index] = Object.assign(Object.assign({}, users[index]), user);
    return users[index];
}
function removeUser(id) {
    const index = users.findIndex((user) => user.id === id);
    if (index == -1) {
        throw ('User not found');
    }
    users.splice(index, 1);
}
//# sourceMappingURL=user.service.js.map