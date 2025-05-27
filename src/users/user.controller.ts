import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserModel } from "./user.model";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()  // Changed from '/getUsers' to just '/'
    getUsers(): UserModel[] {
        return this.userService.getUsers();
    }

    @Get(':email')
    getUserByEmail(@Param('email') email: string): UserModel | null {
        return this.userService.getUserByEmail(email);
    }

    @Post()  // Changed from '/createUser' to just '/'
    createUser(@Body() body: { name: string; email: string; password: string }): UserModel {
        return this.userService.createUser(body.name, body.email, body.password);
    }

    @Put(':email')
    updateUser(
        @Param('email') email: string,
        @Body() body: { name?: string; password?: string }
    ): UserModel | null {
        return this.userService.updateUser(email, body.name, body.password);
    }

    @Delete(':email')
    deleteUser(@Param('email') email: string): boolean {
        return this.userService.deleteUser(email);
    }
}