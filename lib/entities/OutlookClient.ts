import { BmbyEntity } from "./BmbyEntity";
import { UnitType, CrmType } from "../Enumerations";
import { OutlookCrmList } from "./OutlookCrmList";
import { OutlookOpportunity } from "./OutlookOpportunity";

export class OutlookClient extends BmbyEntity {
    private _opportunities = Array<OutlookOpportunity>();
    private _crmList = Array<OutlookCrmList>();

    constructor() {
        super();

        this._data = {
            "firstName": "",
            "lastName": "",
            "phoneHome": "",
            "phoneMobile": "",
            "email": "",
            "salesperson": "",
            "interestedIn": "",
            "remark": "",
            "stageInSale": "",
            "lastContactDate": "",
            "lastContactPerson": "",
            "isSynced": "",
            "bmbyUnitId": "",
            "unitType": "",
            "opportunities": [],
            "crmList": []
        }
    }

    set opportunities(value: Array<OutlookOpportunity>) {

        this._opportunities = new Array<OutlookOpportunity>();

        if (value = null) {
            return;
        }

        for (let i in value) {
            this._opportunities.push(value[i]);
        }
    }

    get opportunities(): Array<OutlookOpportunity> {
        return this._opportunities
    }

    set crmList(value: Array<OutlookCrmList>) {
        this._crmList = new Array<OutlookCrmList>();

        if (value = null) {
            return;
        }

        for (let i in value) {
            this._crmList.push(value[i]);
        }
    }

    get crmList(): Array<OutlookCrmList> {
        return this._crmList;
    }

    set firstName(value: string) {
        this._data["firstName"] = value;
    }

    get firstName(): string {
        return this._data["firstName"];
    }

    set lastName(value: string) {
        this._data["lastName"] = value;
    }

    get lastName(): string {
        return this._data["lastName"];
    }

    set phoneHome(value: string) {
        this._data["phoneHome"] = value;
    }

    get phoneHome(): string {
        return this._data["phoneHome"];
    }

    set phoneMobile(value: string) {
        this._data["phoneMobile"] = value;
    }

    get phoneMobile(): string {
        return this._data["phoneMobile"];
    }

    set email(value: string) {
        this._data["email"] = value;
    }

    get email(): string {
        return this._data["email"];
    }

    set salesperson(value: string) {
        this._data["salesperson"] = value;
    }

    get salesperson(): string {
        return this._data["salesperson"];
    }


    set interestedIn(value: string) {
        this._data["interestedIn"] = value;
    }

    get interestedIn(): string {
        return this._data["interestedIn"];
    }

    set remark(value: string) {
        this._data["remark"] = value;
    }

    get remark(): string {
        return this._data["remark"];
    }

    set lastContactDate(value: string) {
        this._data["lastContactDate"] = value;
    }

    get lastContactDate(): string {
        return this._data["lastContactDate"];
    }

    set stageInSale(value: string) {
        this._data["stageInSale"] = value;
    }

    get stageInSale(): string {
        return this._data["stageInSale"];
    }

    set lastContactPerson(value: string) {
        this._data["lastContactPerson"] = value;
    }

    get lastContactPerson(): string {
        return this._data["lastContactPerson"];
    }

    set isSynced(value: boolean) {
        this._data["isSynced"] = value;
    }

    get isSynced(): boolean {
        return this._data["isSynced"];
    }

    set bmbyUnitId(value: number) {
        this._data["bmbyUnitId"] = value;
    }

    get bmbyUnitId(): number {
        return this._data["bmbyUnitId"];
    }


    set unitType(value: UnitType) {
        this._data["unitType"] = value;
    }

    get unitType(): UnitType {
        return this._data["unitType"];
    }

    set data(value: any) {
        this._data = value;

        this._data['unitType'] = UnitType[this._data['unitType']];

        this._opportunities = new Array<OutlookOpportunity>();

        if (value['opportunities'] != undefined && value['opportunities'][0] != undefined) {
            for (let i in value['opportunities']) {
                let outlookOpportunity = new OutlookOpportunity();
                outlookOpportunity.data = value['opportunities'][i];
                this._opportunities.push(outlookOpportunity);
            }
        }

        this._crmList = new Array<OutlookCrmList>();

        if (value['crmList'] != undefined && value['crmList'][0] != undefined) {
            for (let i in value['crmList']) {
                let outlookCrm = new OutlookCrmList();
                outlookCrm.data = value['crmList'][i];
                this._crmList.push(outlookCrm);
            }
        }
    }

    get data(): any {

        this._data['unitType'] = UnitType[this._data['unitType']];

        this._data['opportunities'] = [];
        this._data['crmList'] = [];

        for (let i in this._opportunities) {
            this._data['opportunities'].push(this._opportunities[i].data);
        }
        for (let i in this._crmList) {
            this._data['crmList'].push(this._crmList[i].data);
        }

        return this._data;
    }
}