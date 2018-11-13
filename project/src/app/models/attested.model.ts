export class Attested {
    _id: string;
    title: string;
    type: string;
    hours: number;
    constructor(_id, title, type, hours) {
        this._id = _id;
        this.title = title;
        this.type = type;
        this.hours = hours;
    }
}
