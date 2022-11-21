import { Usuarios } from './usuarios';
export class User implements Usuarios{
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name : string

    constructor(user: Usuarios)
    {
        this.avatar = user.avatar;
        this.id = user.id;
        this.email = user.email;
        this.first_name= user.first_name;
        this.last_name = user.last_name;

    }
}
