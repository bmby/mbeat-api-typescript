import { BmbyEntity } from "./BmbyEntity";
import { SurvayOpinion, FormElementType } from "../Enumerations";
import { ListItem } from "./ListItem";

export class FormElement extends BmbyEntity {
    private _options:Array<ListItem>  = new Array<ListItem>();

    constructor() {
        super();

        this._data = {
            "type": FormElementType.Unknown,
            "fieldName": "",
            "question": "",
            "value": null,
            "options": [],
            "required": false
        }
    }

    get data(): any {
        this._data['options'] = [];
        this._options.forEach(e => this._data['options'].push(e.data))

        return this._data;
    } 
    set data(value: any) {
        this._data = value;
        this._data['type'] = FormElementType[this._data['type']];    
                
        this._data['options'].forEach(d => {
            let formElemnt = new ListItem();
            formElemnt.data = d;
            this._options.push(formElemnt);
        });
    }

    get type(): FormElementType {
        return this._data["type"];
    }
    set type(value: FormElementType) {
        this._data["type"] = SurvayOpinion[value];
    }

    get fieldName(): string {
        return this._data["fieldName"];
    }
    set fieldName(value: string) {
        this._data["fieldName"] = value;
    }

    get question(): string {
        return this._data["question"];
    }
    set question(value: string) {
        this._data["question"] = value;
    }

    get value(): string {
        return this._data["value"];
    }
    set value(value: string) {
        this._data["value"] = value;
    }

    get options(): Array<ListItem> {
        return this._data["options"];
    }
    set options(value: Array<ListItem>) {
        this._data["options"] = value;
    }

    get required(): boolean {
        return this._data["required"];
    }
    set required(value: boolean) {
        this._data["required"] = value;
    }
}