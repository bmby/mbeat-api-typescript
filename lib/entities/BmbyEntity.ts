export class BmbyEntity {
    protected _data: any;

    get data(): any {
        return this._data;
    } 
    set data(value: any) {
        this._data = value;
    }
}