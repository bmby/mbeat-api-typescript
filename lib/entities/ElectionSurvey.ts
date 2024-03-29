import { BmbyEntity } from "./BmbyEntity";
import { SurvayOpinion } from "../Enumerations";
import { FormElement } from "./FormElement";

export class Phone extends BmbyEntity
{
    constructor() {
        super();

        this._data = {
            "label": "",
            "number": ""
        }
    }

    get label(): string {
        return this._data["label"];
    }
    set label(value: string) {
        this._data["label"] = value;
    }

    get number(): string {
        return this._data["number"];
    }
    set number(value: string) {
        this._data["number"] = value;
    }
}

export class ElectionSurvey extends BmbyEntity {
    private _form:Array<FormElement> = new Array<FormElement>();
    private _phoneNumbers:Array<Phone> = new Array<Phone>();

    constructor() {
        super();

        this._data = {
            "clientId": 0,
            "voterSerialNumber": 0,
            "voterId": 0,
            "ballotBox": "",
            "firstName": "",
            "lastName": "",
            "phoneNumbers": [],
            "opinionColor": "",
            "opinion": SurvayOpinion.Unknown,
            "age": 0,
            "form": []
        }
    }

    get data(): any {
        this._data['form'] = [];
        this._data['phoneNumbers'] = [];

        this._form.forEach(e => this._data['form'].push(e.data))
        this._phoneNumbers.forEach(e => this._data['phoneNumbers'].push(e.data))

        return this._data;
    } 
    set data(value: any) {
        this._data = value;

        this._data['opinion'] = SurvayOpinion[this._data['opinion']];    
        this._form = new Array<FormElement>();

        this._data['form'].forEach(d => {
            let formElemnt = new FormElement();
            formElemnt.data = d;
            this._form.push(formElemnt);
        });

        this._data['phoneNumbers'].forEach(d => {
            let phone = new Phone();
            phone.data = d;
            this._phoneNumbers.push(phone);
        });
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

    get age(): number {
        return this._data["age"];
    }
    set age(value: number) {
        this._data["age"] = value;
    }

    get ballotBox(): string {
        return this._data["ballotBox"];
    }
    set ballotBox(value: string) {
        this._data["ballotBox"] = value;
    }

    get phoneNumbers(): Array<Phone> {
        return this._phoneNumbers;
    }
    set phoneNumbers(value: Array<Phone>) {
        this._phoneNumbers = value;
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

    get opinionColor(): string {
        return this._data["opinionColor"];
    }
    set opinionColor(value: string) {
        this._data["opinionColor"] = value;
    }

    get opinion(): SurvayOpinion {
        return this._data["opinion"];
    }
    set opinion(value: SurvayOpinion) {
        this._data["opinion"] = SurvayOpinion[value];
    }

    get form(): Array<FormElement> {
        return this._form
    }
    set form(value: Array<FormElement>) {
        this._form = value;
    }
}