import { BmbyEntity } from "./BmbyEntity";
import { SurvayOpinion } from "../Enumerations";
import { FormElement } from "./FormElement";

export class FormElementResult extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            "fieldName": 0,
            "value": null
        }
    }

    get fieldName(): string {
        return this._data["fieldName"];
    }
    set fieldName(value: string) {
        this._data["fieldName"] = value;
    }

    get value(): any {
        return this._data["value"];
    }
    set value(value: any) {
        this._data["value"] = value;
    }
}

export class ElectionSurveyResult extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            "clientId": 0,
            "form": []
        }
    }

    get clientId(): number {
        return this._data["clientId"];
    }
    set clientId(value: number) {
        this._data["clientId"] = value;
    }

    get form(): Array<FormElementResult> {
        return this._data['form']
    }
    set form(value: Array<FormElementResult>) {
        this._data['form'] = value;
    }
}