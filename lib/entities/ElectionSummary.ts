import { BmbyEntity } from "./BmbyEntity";

export class ElectionSummary extends BmbyEntity {
    constructor() {
        super();

        this._data = {
            "ballotBoxNumber": 0,
            "totalVoted": 0,
            "totalVoters": 0,
            "totalVotedPercentage": 0,
            "totalVotedColor": "blue",
            "totalSupportersPercentage": 0,
            "totalSupportersColor": "green"
        }
    }

    get ballotBoxNumber(): number {
        return this._data["ballotBoxNumber"];
    }
    set ballotBoxNumber(value: number) {
        this._data["ballotBoxNumber"] = value;
    }

    get totalVoted(): number {
        return this._data["totalVoted"];
    }
    set totalVoted(value: number) {
        this._data["totalVoted"] = value;
    }

    get totalVoters(): number {
        return this._data["totalVoters"];
    }
    set totalVoters(value: number) {
        this._data["totalVoters"] = value;
    }

    get totalVotedPercentage(): number {
        return this._data["totalVotedPercentage"];
    }
    set totalVotedPercentage(value: number) {
        this._data["totalVotedPercentage"] = value;
    }

    get totalVotedColor(): string {
        return this._data["totalVotedColor"];
    }
    set totalVotedColor(value: string) {
        this._data["totalVotedColor"] = value;
    }

    get totalSupportersPercentage(): number {
        return this._data["totalSupportersPercentage"];
    }
    set totalSupportersPercentage(value: number) {
        this._data["totalSupportersPercentage"] = value;
    }

    get totalSupportersColor(): string {
        return this._data["totalSupportersColor"];
    }
    set totalSupportersColor(value: string) {
        this._data["totalSupportersColor"] = value;
    }
}