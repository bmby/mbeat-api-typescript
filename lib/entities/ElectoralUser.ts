import { BmbyEntity } from "./BmbyEntity";
import { ElectoralUserType } from "../index";

export class ElectoralUser extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            "type": ElectoralUserType.Unknown,
            "firstName": "",
            "lastName": "",
            "avatar": ""
        }
    }

    get type(): ElectoralUserType {
        return this._data["type"];
    }
    set type(value: ElectoralUserType) {
        this._data["type"] = ElectoralUserType[value];
    }

    get firstName(): string {
        return this._data["firstName"];
    }
    set firstName(value: string) {
        this._data["firstName"] = value;
    }

    get lastName(): string {
        return this._data["lastName"];
    }
    set lastName(value: string) {
        this._data["lastName"] = value;
    }

    get avatar(): string {
        return this._data["avatar"];
    }
    set avatar(value: string) {
        this._data["avatar"] = value;
    }
}