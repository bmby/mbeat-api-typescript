export class PaginatedList<T> {
    
    constructor(private _data: any) { }

    get hasNextPage(): boolean {
        return this._data.hasNextPage;
    }

    get hasPreviousPage(): boolean {
        return this._data.hasPreviousPage;
    }

    get isFirstPage(): boolean {
        return this._data.isFirstPage;
    }

    get isLastPage(): boolean {
        return this._data.isLastPage;
    }

    get pageCount(): number {
        return this._data.pageCount;
    }

    get pageSize(): number {
        return this._data.pageSize;
    }

    get totalItemCount(): number {
        return this._data.totalItemCount;
    }

    get pageNumber(): number {
        return this._data.pageNumber;
    }

    get items(): Array<T> {
        return this._data.items;
    }
}