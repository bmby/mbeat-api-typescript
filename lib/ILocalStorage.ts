export interface ILocalStorage {
    store(key: string, value: any): void;
    get(key: string): string;
    delete(key: string): void;
}