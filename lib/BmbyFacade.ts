import { IBmbyHttpClient } from './IBmbyHttpClient';
import { ILocalStorage } from './ILocalStorage';
import { ElectoralRest } from './rest/ElectoralRest';
import { IdentityRest } from './rest/IdentityRest';

export class BmbyFacade {
    private _identityRest: IdentityRest;
    private _electoralRest: ElectoralRest;

    constructor(private _httpClient: IBmbyHttpClient, private _localStore: ILocalStorage, endPoint?: string) {
        this._identityRest = new IdentityRest(_httpClient, _localStore, endPoint);
        this._electoralRest = new ElectoralRest(_httpClient, _localStore, endPoint);
    }

    get identityRest(): IdentityRest {
        return this._identityRest;
    }

    get electoralRest(): ElectoralRest {
        return this._electoralRest;
    }
}