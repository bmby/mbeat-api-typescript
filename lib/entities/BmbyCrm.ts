import { BmbyEntity } from "./BmbyEntity";
import { UnitType, CrmType} from "../Enumerations";

export abstract class BmbyCrm extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            "ownerId": "",
            "clientId" : "",
            "bmbyUnitId": "",
            "unitType": "",
            "type": null,
        }
    }

    get type(): CrmType {
        return this._data["type"];
    }

    set unitType(value: UnitType) {
        this._data["unitType"] = value;
    }

    get unitType(): UnitType {
        return this._data["unitType"];
    }

    get ownerId(): number {
        return this._data["ownerId"];
    }

    set ownerId(value: number) {
        this._data["ownerId"] = value;
    }

    get clientId(): number {
        return this._data["clientId"];
    }

    set clientId(value: number) {
        this._data["clientId"] = value;
    }

    get bmbyUnitId(): number {
        return this._data["bmbyUnitId"];
    }

    set bmbyUnitId(value: number) {
        this._data["bmbyUnitId"] = value;
    }


    set data(value: any) {
        this._data = value;

        this._data['unitType'] = UnitType[this._data['unitType']];
        this._data['type'] = CrmType[this._data['type']];
    }

    get data(): any {

        this._data['unitType'] = UnitType[this._data['unitType']];
        this._data['type'] = CrmType[this._data['type']];

        return this._data;
    }
}