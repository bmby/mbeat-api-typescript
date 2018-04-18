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
    private _form:Array<FormElementResult> = new Array<FormElementResult>();

    constructor() {
        super();

        this._data = {
            "clientId": 0,
            "form": []
        }
    }

    get data(): any {
        this._data['form'] = [];
        this._form.forEach(e => this._data['form'].push(e.data))

        return this._data;
    } 
    set data(value: any) {
        this._data = value;
        this._form = new Array<FormElementResult>();
        
        this._data['form'].forEach(d => {
            let formElemnt = new FormElementResult();
            formElemnt.data = d;
            this._form.push(formElemnt);
        });
    }

    get clientId(): number {
        return this._data["clientId"];
    }
    set clientId(value: number) {
        this._data["clientId"] = value;
    }

    get form(): Array<FormElementResult> {
        return this._form;
    }
    set form(value: Array<FormElementResult>) {
        this._form = value;
    }
}