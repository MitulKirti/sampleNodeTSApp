import { Prisma } from "@prisma/client";
import prisma from "../db";
import { User } from "./user.entity";

const users: User[] = [];

function getAllUsers() {
    // return users;
    return prisma.user.findMany();
};

function getUserById(id: string) {
    // const user = users.find((user) => user.id === id);
    // if (!user) {
    //     throw "User not found!";
    // }
    // return user;
    return prisma.user.findFirstOrThrow({ where: { id } })
}

function createUser(user: Prisma.UserCreateInput) {
    // const id = users.length + 1;
    // users.push({ ...user, id });
    return prisma.user.create({ data: user });
}

function updateUser(id: string, user: Prisma.UserUpdateInput) {
    // const index = users.findIndex((user) => user.id === id);
    // if (index == -1) {
    //     throw ('User not found');
    // }
    // users[index] = { ...users[index], ...user };
    // return users[index];
    return prisma.user.update({
        where: { id },
        data: user,
    })
}

function removeUser(id: string) {
    // const index = users.findIndex((user) => user.id === id);
    // if (index == -1) {
    //     throw ('User not found');
    // }
    // users.splice(index, 1);
    return prisma.user.delete({ where: { id } });
}

export { getAllUsers, getUserById, createUser, updateUser, removeUser };