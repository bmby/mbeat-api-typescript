import { BmbyRest } from './BmbyRest';
import { IBmbyHttpClient, BmbyHttpResponse, BmbyHttpResponseStatus, BmbyContentType } from '../IBmbyHttpClient';
import { ILocalStorage } from '../ILocalStorage';

export class IdentityRest extends BmbyRest {
    private _autorefreshing = false;

    protected _endPoint = "https://identity.bmby.com";
    protected _tokenUri = "/connect/token";

    private storeData(data: any){
        this._storage.store(this._accessTokenField, data.access_token);
        this._storage.store(this._refereshTokenField, data.refresh_token);

        let tokenParts = (<string>data.access_token).split('.');
        
        if (tokenParts[1] == undefined) {
            return;
        }

        let decodedToken: any = JSON.parse(this._httpClient.base64Decode(tokenParts[1]))
        
        if (decodedToken.exp == undefined) {
            return;
        }

        this._storage.store(this._tokenExpirationField, decodedToken.exp);
    }

    isLoggedIn(clientId: string, clientSecret: string): Promise<any> {
        let expirationTime: number = parseInt(this._storage.get(this._tokenExpirationField));

        if (!isNaN(expirationTime) && expirationTime != null && expirationTime > new Date().getTime() / 1000) {
            return new Promise<boolean>((resolve, reject) => {
                resolve(null);
            }); 
        }

        let refreshToken = this._storage.get(this._refereshTokenField);

        if (refreshToken == null) {
            return new Promise<boolean>((resolve, reject) => {
                reject(null);
            }); 
        }

        return this.refereshToken(clientId, clientSecret);
    }

    login(clientId: string, clientSecret: string, username: string, password: string): Promise<BmbyHttpResponse> {
        let data: any = {
            'grant_type': 'password',
            'client_id': clientId,
            'username': username,
            'password': password
        };

        if (clientSecret != "") {
            data['client_secret'] = clientSecret;
        }

        let result = this.post(this._tokenUri, data, false, BmbyContentType.UrlEncoded);
        let _this = this;

        result.then(function(response: BmbyHttpResponse){
            if (response.status == BmbyHttpResponseStatus.Ok) {
                let data = response.data;
                _this.storeData(data);
            }
        });

        return result;
    }

    refereshToken(clientId: string, clientSecret: string): Promise<BmbyHttpResponse> {
        let refreshToken: string = this._storage.get(this._refereshTokenField);

        if (refreshToken == null) {
            return;
        }

        let data: any = {
            'grant_type': 'refresh_token',
            'client_id': clientId,
            'refresh_token': refreshToken
        };

        if (clientSecret != "") {
            data['client_secret'] = clientSecret;
        }

        let result = this.post(this._tokenUri, data, false, BmbyContentType.UrlEncoded);
        let _this = this;

        result.then(function(response: BmbyHttpResponse){
            if (response.status == BmbyHttpResponseStatus.Ok) {
                let data = response.data;
                _this.storeData(data);
            }
        });
        
        return result;
    }

    logout(clientId: string, clientSecret: string): Promise<BmbyHttpResponse> {
        this._storage.delete(this._accessTokenField);
        this._storage.delete(this._refereshTokenField);
        this._storage.delete(this._tokenExpirationField);

        return new Promise<BmbyHttpResponse>((resolve, reject) => {
            resolve(null);
        });
    }
}
