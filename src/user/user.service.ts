import { User } from "./user.entity";

const users: User[] = [];

function getAllUsers() {
    return users;
};

function getUserById(id: number) {
    const user = users.find((user) => user.id === id);
    if (!user) {
        throw "User not found!";
    }
    return user;
}

function createUser(user: Omit<User, 'id'>) {
    const id = users.length + 1;
    users.push({ ...user, id });
}

function updateUser(id: number, user: Omit<User, 'id'>) {
    const index = users.findIndex((user) => user.id === id);
    if (index == -1) {
        throw ('User not found');
    }
    users[index] = { ...users[index], ...user };
    return users[index];
}

function removeUser(id: number) {
    const index = users.findIndex((user) => user.id === id);
    if (index == -1) {
        throw ('User not found');
    }
    users.splice(index, 1);
}

export { getAllUsers, getUserById, createUser, updateUser, removeUser };