import { BmbyEntity } from "./BmbyEntity";

export class DisplayListItem extends BmbyEntity {
    constructor(label: string, value: string) {
        super();

        this._data = {
            'label': label,
            'value': value
        }
    }

    get label(): string {
        return this._data['label'];
    }
    set label(value: string) {
        this._data['label'] = value;
    }

    get value(): string {
        return this._data['value'];
    }
    set value(value: string) {
        this._data['value'] = value;
    }
}