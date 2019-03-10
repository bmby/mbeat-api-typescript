import { QueryParams } from "../QueryParams";

export class InterestedDetailsQueryParams extends QueryParams {
    constructor() {
        super();

        this._params['addinId'] = null;
        this._params['messageId'] = null;
        this._params['emails'] = [];
    }

    get addinId(): string {
        return this._params['addinId'];
    }
    set addinId(value: string) {
        this._params['addinId'] = value;
    }

    get messageId(): string {
        return this._params['messageId'];
    }
    set messageId(value: string) {
        this._params['messageId'] = value;
    }

    get emails(): Array<string> {
        return (<string>this._params['emails']).split(",");
    }
    set emails(value: Array<string>) {
        this._params['emails'] = value.join(",");
    }
}