export enum SortDirection {
    Asc = 0,
    Desc = 1
}

export class QueryParams {
    protected _params: any = {
        'sortBy': '',
        'sortDirection': SortDirection[0].toLowerCase(),
        'page': null,
        'pageSize': null,
        'keywords': null,
    }

    get keywords(): string {
        return this._params['keywords'];
    }
    set keywords(value: string) {
        this._params['keywords'] = value;
    }

    get sortBy(): string {
        return this._params['sortBy'];
    }
    set sortBy(value: string) {
        this._params['sortBy'] = value;
    }

    get sortDirection(): SortDirection {
        return this._params['sortDirection'];
    }
    set sortDirection(value: SortDirection) {
        this._params['sortDirection'] = SortDirection[value].toLowerCase();
    }

    get page(): number {
        return this._params['page'];
    }
    set page(page: number) {
        this._params['page'] = page;
    }

    get pageSize(): number {
        return this._params['pageSize'];
    }
    set pageSize(page: number) {
        this._params['pageSize'] = page;
    }

    queryString(): string {
        let params = [];
        
        for (let key in this._params) {
            let value = this._params[key];
            
            if (value == null || !isNaN(value) && value == 0 || value == "") {
                continue;
            }

            params.push(key + "=" + encodeURIComponent(value));
        }

        let q = params.join("&");

        return q != "" ? '?' + q : "";
    }
}