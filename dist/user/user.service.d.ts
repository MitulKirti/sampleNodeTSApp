import { User } from "./user.entity";
declare function getAllUsers(): User[];
declare function getUserById(id: number): User;
declare function createUser(user: Omit<User, 'id'>): void;
declare function updateUser(id: number, user: Omit<User, 'id'>): User;
declare function removeUser(id: number): void;
export { getAllUsers, getUserById, createUser, updateUser, removeUser };
//# sourceMappingURL=user.service.d.ts.map