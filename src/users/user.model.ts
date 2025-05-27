enum UserStatus {
    ACTVATE = 'active',
    INACTIVE = 'inactive',
}

export class UserModel {

    name: string;
    email: string;
    password: string;
    userStatus: UserStatus = UserStatus.ACTVATE;
    createdAt: Date;
    updatedAt: Date;
    static UserStatus: any;
    
    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}