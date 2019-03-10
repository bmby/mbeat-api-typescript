import { OutlookEntity} from "./OutlookEntity";
import { BmbyCrm } from "./BmbyCrm";
import { BmbyCrmEmail } from "./BmbyCrmEmail";
import { CrmType } from "../Enumerations";

export  class OutlookCrm extends OutlookEntity {

    private _bmbyCrm: BmbyCrm;

    constructor() {
        super();
        this._data["bmbyCrm"] = null;
        this._data["messageId"] = "";
    }

    set bmbyCrm(value: BmbyCrm) {
        this._data["bmbyCrm"] = value.data;
    }

    get bmbyCrm(): BmbyCrm {

        switch (this._bmbyCrm.type) {
            case CrmType.Email:
                this._bmbyCrm = new BmbyCrmEmail();
                this._bmbyCrm.data = this._data["bmbyCrm"];
                break;
        }

        return this._bmbyCrm;
    }

    set messageId(value: string) {
        this._data["messageId"] = value;
    }

    get messageId(): string {
        return this._data["messageId"];
    }
}