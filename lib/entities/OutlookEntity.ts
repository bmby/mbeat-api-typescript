import { BmbyEntity } from "./BmbyEntity";

export class OutlookEntity extends BmbyEntity {

    constructor() {
        super();

        this._data = {
            "addinId": ""
        }
    }

    set addinId(value: string) {
        this._data["addinId"] = value;
    }

    get addinId(): string {
        return this._data["addinId"];
    }
}