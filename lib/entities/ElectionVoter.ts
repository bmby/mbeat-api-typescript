import { BmbyEntity } from "./BmbyEntity";

export class ElectionVoter extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            "clientId": 0,
            "voterSerialNumber": 0,
            "voterId": 0,
            "firstName": "",
            "lastName": "",
            "voted": false
        }
    }

    get clientId(): number {
        return this._data["clientId"];
    }
    set clientId(value: number) {
        this._data["clientId"] = value;
    }

    get voterSerialNumber(): number {
        return this._data["voterSerialNumber"];
    }
    set voterSerialNumber(value: number) {
        this._data["voterSerialNumber"] = value;
    }

    get voterId(): number {
        return this._data["voterId"];
    }
    set voterId(value: number) {
        this._data["voterId"] = value;
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

    get voted(): boolean {
        return this._data["voted"];
    }
    set voted(value: boolean) {
        this._data["voted"] = value;
    }
}