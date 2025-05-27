import { Injectable } from "@nestjs/common";
import { UserModel } from "./user.model";

export class UserService {
    private users:UserModel[] = [];


      getUsers(): UserModel[] {
        return this.users.filter(user => user.userStatus === UserModel.UserStatus.ACTVATE);
    }

    getUserByEmail(email: string): UserModel | null {
        const user = this.users.find(user => user.email === email);
        return user && user.userStatus === UserModel.UserStatus.ACTVATE ? user : null;
    }

    createUser(name: string, email: string, password: string): UserModel {
        const user = new UserModel(
            name,
            email,
            password
        );
        this.users.push(user);
        return user;
    }

    updateUser(email: string, name?: string, password?: string): UserModel | null {
        const user = this.users.find(user => user.email === email);
        if (!user) {
            return null;
        }
        if (name) {
            user.name = name;
        }
        if (password) {
            user.password = password;
        }
        user.updatedAt = new Date();
        return user;
    }

    deleteUser(email: string): boolean {
        const index = this.users.findIndex(user => user.email === email);
        if (index === -1) {
            return false;
        }
        this.users[index].userStatus = UserModel.UserStatus.INACTIVE;
        this.users[index].updatedAt = new Date();
        return true;
    }
    
        
}