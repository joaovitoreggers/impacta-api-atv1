export class UserModel {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    
    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}