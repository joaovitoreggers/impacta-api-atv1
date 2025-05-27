import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { UserModel } from "./user.model";

@Injectable()
export class UserService {
    private users: UserModel[] = [];

    getUsers(): UserModel[] {
        return this.users;
    }

    getUserByEmail(email: string): UserModel | null {
        if (!email) {
            throw new BadRequestException('Email is required');
        }
        
        return this.users.find(user => user.email === email) || null;
    }

    createUser(name: string, email: string, password: string): UserModel {
        if (!name || !email || !password) {
            throw new BadRequestException('All fields are required');
        }

        const existingUser = this.users.find(user => user.email === email);
        if (existingUser) {
            throw new BadRequestException('User already exists');
        }

        const user = new UserModel(name, email, password);
        this.users.push(user);
        return user;
    }

    updateUser(email: string, name?: string, password?: string): UserModel | null {
        const user = this.users.find(user => user.email === email);
        if (!user) {
            throw new NotFoundException('User not found');
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
            throw new NotFoundException('User not found');
        }
        
        this.users.splice(index, 1);
        return true;
    }
}