export enum BmbyContentType {
    UrlEncoded = 0,
    Json
}

export enum BmbyHttpMethod {
    Get = 0,
    Post,
    Put,
    Delete,
    Patch
}

export enum BmbyHttpResponseStatus {
    Ok = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    ServerError = 500
}

export class BmbyHttpResponse {
    constructor (
        private _status: BmbyHttpResponseStatus,
        private _data: any
    ){};

    get status(): BmbyHttpResponseStatus {
        return this._status;
    }

    get data(): any {
        return this._data;
    }
}

export interface IBmbyHttpClient {
    base64Decode(encodedString: string): string;
    urlEncode(data: Object): any;
    request(url: string, method: BmbyHttpMethod, headers: any, content?: any): Promise<BmbyHttpResponse>;
    upload(url: string, meta: any, filePath: string, headers: any): Promise<BmbyHttpResponse>;
}