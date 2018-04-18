import { BmbyEntity } from "./BmbyEntity";

export class ListItem extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            'key': '',
            'display_name': '',
            'description': '',
            'tags': '',
            'avatar': '',
            'icon': '',
            'selected': false
        }
    }

    get key(): string {
        return this._data['key'];
    }

    get displayName(): string {
        return this._data['display_name'];
    }
    set displayName(value: string) {
        this._data['display_name'] = value;
    }

    get description(): string {
        return this._data['description'];
    }
    set description(value: string) {
        this._data['description'] = value;
    }

    get tags(): string {
        return this._data['tags'];
    }
    set tags(value: string) {
        this._data['tags'] = value;
    }

    get avatar(): string {
        return this._data['avatar'];
    }
    set avatar(value: string) {
        this._data['avatar'] = value;
    }

    get icon(): string {
        return this._data['icon'];
    }
    set icon(value: string) {
        this._data['icon'] = value;
    }

    get selected(): boolean {
        return this._data['selected'];
    }
    set selected(value: boolean) {
        this._data['selected'] = value;
    }
}