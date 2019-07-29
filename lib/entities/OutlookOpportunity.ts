import { BmbyEntity } from "./BmbyEntity";

export class OutlookOpportunity extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            "date": "",
            "salesperson": "",
            "ammount": 0,
            "status": "",
            "description": "",
            "products": ""
        }
    }

    get date(): Date {
        return new Date(this._data["date"]);
    }

    set date(value: Date) {
        this._data["date"] = value;
    }

    get salesperson(): string {
        return this._data["salesperson"];
    }

    set salesperson(value: string) {
        this._data["salesperson"] = value;
    }

    get ammount(): string {
        return this._data["ammount"];
    }

    set ammount(value: string) {
        this._data["ammount"] = value;
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

    get products(): string {
        return this._data["products"];
    }

    set products(value: string) {
        this._data["products"] = value;
    }
}