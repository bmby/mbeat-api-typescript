import { BmbyHttpResponse, IBmbyHttpClient, BmbyHttpMethod, BmbyContentType } from '../IBmbyHttpClient';
import { ILocalStorage } from '../ILocalStorage';

export abstract class BmbyRest {
    protected _endPoint: string = "https://mbeat.bmby.com/api";
    protected _clientId: string = "";
    protected _clientSecret: string = "";
    protected _refereshTokenField: string = "bmbyRefreshToken";
    protected _accessTokenField: string = "bmbyAccessToken";
    protected _tokenExpirationField: string = "tokenExpirationTime"
    protected _httpClient: IBmbyHttpClient;
    protected _storage: ILocalStorage;

    protected _contentTypes: any = {
        "urlencoded": "application/x-www-form-urlencoded",
        "json": "application/json"
    }

    protected getHeaders(authorize: boolean, contentType?: BmbyContentType):any {
        contentType = contentType != undefined ? contentType : BmbyContentType.Json;
        let contentTypeKey: string = BmbyContentType[contentType].toLowerCase();

        let headers: any = {
            "Content-Type": this._contentTypes[contentTypeKey]
        }

        if (authorize) {
            let token = this._storage.get(this._accessTokenField);

            if (token != null)
            {
                headers["Authorization"] = "Bearer " + token;
            }
        }

        return headers;
    }

    protected post(uri: string, data: any, authorize: boolean, contentType: BmbyContentType): Promise<BmbyHttpResponse> {
        let headers = this.getHeaders(authorize, contentType);
              
        if (contentType == BmbyContentType.UrlEncoded) {
            data = this._httpClient.urlEncode(data);
        }

        return this._httpClient.request(this._endPoint + uri, BmbyHttpMethod.Post, headers, data);
    }

    protected put(uri: string, data: any, authorize: boolean): Promise<BmbyHttpResponse> {
        let headers = this.getHeaders(authorize);
        return this._httpClient.request(this._endPoint + uri, BmbyHttpMethod.Put, headers, data);
    }

    protected patch(uri: string, data: any, authorize: boolean): Promise<BmbyHttpResponse> {
        let headers = this.getHeaders(authorize);
        return this._httpClient.request(this._endPoint + uri, BmbyHttpMethod.Patch, headers, data);
    }

    protected delete(uri: string, authorize: boolean): Promise<BmbyHttpResponse> {
        let headers = this.getHeaders(authorize);
        return this._httpClient.request(this._endPoint + uri, BmbyHttpMethod.Delete, headers);
    }

    protected get(uri: string, authorize: boolean, params?: any): Promise<BmbyHttpResponse> {
        let headers = this.getHeaders(authorize);
        return this._httpClient.request(this._endPoint + uri, BmbyHttpMethod.Get, headers);
    }

    protected upload(uri: string, meta: any, filePath: string): Promise<BmbyHttpResponse> {
        let headers = {
            "Authorization": "Bearer " + this._storage.get(this._accessTokenField)
        };

        return this._httpClient.upload(this._endPoint + uri, meta, filePath, headers);
    }

    constructor(httpClient: IBmbyHttpClient, storage: ILocalStorage, endPoint?: string) {
        this._httpClient = httpClient;
        this._storage = storage;

        if (endPoint != undefined) {
            this._endPoint = endPoint;
        }
    }

    set endPoint(endPoint: string) {
        this._endPoint = endPoint;
    }
    get endPoint(): string {
        return this._endPoint;
    }

}