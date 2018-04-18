import { BmbyEntity } from "./BmbyEntity";

export class ElectoralAlert extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            "alertId": 0,
            "status": "",
            "description": "",
            "value": false
        }
    }

    get alertId(): number {
        return this._data["alertId"];
    }
    set alertId(value: number) {
        this._data["alertId"] = value;
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

    get value(): boolean {
        return this._data["value"];
    }
    set value(value: boolean) {
        this._data["value"] = value;
    }
}