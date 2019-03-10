import { BmbyCrm } from './BmbyCrm';
import { CrmType } from '../Enumerations';

export class BmbyCrmEmail extends BmbyCrm {
    constructor() {
        super();

        this._data["subject"] = "";
        this._data["message"] = "";
        this._data["date"] = "";
        this._data["type"] = CrmType.Email;
    }

    set subject(value: string) {
        this._data["subject"] = value;
    }

    get subject(): string {
        return this._data["subject"];
    }

    set message(value: string) {
        this._data["message"] = value;
    }

    get message(): string {
        return this._data["message"];
    }

    get date(): Date {
        return new Date(this._data["date"]);
    }

    set date(value: Date) {
        this._data["date"] = value;
    }
}