export class User {
    _id: string;
    name: string;
    email: string;
    graduation: string;
    enrollment: number;
    password: string;
    constructor(_id, name, email, graduation, enrollment, password) {
        this._id = _id;
        this.name = name;
        this.email = email;
        this.graduation = graduation;
        this.enrollment = enrollment;
        this.password = password;
    }
}
