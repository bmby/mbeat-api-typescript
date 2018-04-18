import { BmbyRest } from './BmbyRest';
import { ElectionSurvey } from '../entities/ElectionSurvey';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../QueryParams';
import { PaginatedList } from '../PaginatedList';
import { ElectionVoter } from '../entities/ElectionVoter';
import { ElectoralAlert } from '../entities/ElectoralAlert';
import { ElectionSummary } from '../entities/ElectionSummary';
import { ElectionSurveyResult } from '../entities/ElectionSurvayResult';

export class ElectoralRest extends BmbyRest {
    nextDial(): Promise<ElectionSurvey> {
        let result = this.get("/electoral/nextdial", true);

        return new Promise<ElectionSurvey>((resolve, reject) => {
            result
            .then(function(response) {
                var survey = new ElectionSurvey();
                survey.data = response.data;
                resolve(survey);
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    summary(): Promise<ElectionSummary> {
        let result = this.get("/electoral/summary", true);

        return new Promise<ElectionSummary>((resolve, reject) => {
            result
            .then(function(response) {
                var summary = new ElectionSummary();
                summary.data = response.data;
                resolve(summary);
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listVoters(params: QueryParams): Promise<PaginatedList<ElectionVoter>> {
        let result = this.get("/electoral/voters" + params.queryString(), true);

        return new Promise<PaginatedList<ElectionVoter>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let voters = new Array<ElectionVoter>();
                    
                    for (let i in response.data.items) {
                        let voter = new ElectionVoter();
                        voter.data = response.data.items[i];
                        voters.push(voter);
                    }

                    response.data.items = voters;

                    resolve(new PaginatedList<ElectionVoter>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listAlerts(params: QueryParams): Promise<PaginatedList<ElectoralAlert>> {
        let result = this.get("/electoral/listalerts" + params.queryString(), true);

        return new Promise<PaginatedList<ElectoralAlert>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let alerts = new Array<ElectoralAlert>();
                    
                    for (let i in response.data.items) {
                        let alert = new ElectoralAlert();
                        alert.data = response.data.items[i];
                        alerts.push(alert);
                    }

                    response.data.items = alerts;

                    resolve(new PaginatedList<ElectoralAlert>(response.data));
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    setVoterStatus(clientId: number, voted: boolean): Promise<BmbyHttpResponse> {
        return this.patch("/electoral/votestatus", { clientId: clientId, voted: voted }, true);
    }

    setAlertStatus(alertId: number, value: boolean): Promise<BmbyHttpResponse> {
        return this.patch("/electoral/alertstatus", { alertId: alertId, value: value }, true);
    }

    skipDial(clientId: number): Promise<ElectionSurvey> {
        let result = this.patch("/electoral/skipdail", { clientId: clientId }, true);

        return new Promise<ElectionSurvey>((resolve, reject) => {
            result
            .then(function(response) {
                var survay = new ElectionSurvey();
                survay.data = response.data;
                resolve(survay);
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    unsubscribe(clientId: number): Promise<ElectionSurvey> {
        let result = this.patch("/electoral/unsubscribe", { clientId: clientId }, true);

        return new Promise<ElectionSurvey>((resolve, reject) => {
            result
            .then(function(response) {
                var survay = new ElectionSurvey();
                survay.data = response.data;
                resolve(survay);
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    setSurveyResult(survayResult: ElectionSurveyResult): Promise<ElectionSurvey> {
        let result = this.post("/electoral/survey", survayResult.data, true, BmbyContentType.Json);

        return new Promise<ElectionSurvey>((resolve, reject) => {
            result
            .then(function(response) {
                var survay = new ElectionSurvey();
                survay.data = response.data;
                resolve(survay);
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    dialRequest(dialNumber: string): Promise<BmbyHttpResponse> {
        return this.post("/electoral/dialrequest", { dialNumber: dialNumber }, true, BmbyContentType.Json);
    }
}