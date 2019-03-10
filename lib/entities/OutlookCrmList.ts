import { BmbyEntity } from "./BmbyEntity";
import { CrmType } from "../Enumerations";

export class OutlookCrmList extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            "date": "",
            "type": "",
            "status": "",
            "description": ""
        }
    }
    get date(): Date {
        return new Date(this._data["date"]);
    }

    set date(value: Date) {
        this._data["date"] = value;
    }

    get type(): CrmType {
        return this._data["type"];
    }

    set type(value: CrmType) {
        this._data["type"] = value;
    }

    get status(): string {
        return this._data["status"];
    }

    set status(value: string) {
        this._data["status"] = value;
    }

    get description(): string {
        return this._data["description"];
    }

    set description(value: string) {
        this._data["description"] = value;
    }

    set data(value: any) {
        this._data = value;

        this._data['type'] = CrmType[this._data['type']];
    }

    get data(): any {
        this._data['type'] = CrmType[this._data['type']];

        return this._data;
    }
}