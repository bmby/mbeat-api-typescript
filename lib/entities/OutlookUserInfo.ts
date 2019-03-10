import { BmbyEntity } from "./BmbyEntity";

export class OutlookUserInfo extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            "lang": "he",
            "emails" : []
        }
    }

    get lang(): string {
        return this._data["lang"];
    }

    set lang(value: string) {
        this._data["lang"] = value;
    }

    get emails(): Array<string> {
        return this._data["emails"];
    }

    set emails(value: Array<string>){
        this._data["emails"] = value;
    }
}