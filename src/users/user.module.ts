import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserModel } from "./user.model";
import { UserController } from "./user.controller";

@Module({
    controllers: [UserController],
    providers: [UserService, UserModel],
    exports: [],
    imports: [],
})
export class UserModule {

}