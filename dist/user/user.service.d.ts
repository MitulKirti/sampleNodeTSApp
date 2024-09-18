import { Prisma } from "@prisma/client";
declare function getAllUsers(): Prisma.PrismaPromise<{
    id: string;
    name: string;
    age: number;
}[]>;
declare function getUserById(id: string): Prisma.Prisma__UserClient<{
    id: string;
    name: string;
    age: number;
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
declare function createUser(user: Prisma.UserCreateInput): Prisma.Prisma__UserClient<{
    id: string;
    name: string;
    age: number;
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
declare function updateUser(id: string, user: Prisma.UserUpdateInput): Prisma.Prisma__UserClient<{
    id: string;
    name: string;
    age: number;
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
declare function removeUser(id: string): Prisma.Prisma__UserClient<{
    id: string;
    name: string;
    age: number;
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
export { getAllUsers, getUserById, createUser, updateUser, removeUser };
//# sourceMappingURL=user.service.d.ts.map