import { BmbyEntity } from "./BmbyEntity";
import { SurvayOpinion } from "../Enumerations";
import { FormElement } from "./FormElement";

export class ElectionSurvey extends BmbyEntity {
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

    get phoneNumbers(): Array<string> {
        return this._data["ballotBox"];
    }
    set phoneNumbers(value: Array<string>) {
        this._data["ballotBox"] = value;
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
        return this._data['form']
    }
    set form(value: Array<FormElement>) {
        this._data['form'] = value;
    }
}