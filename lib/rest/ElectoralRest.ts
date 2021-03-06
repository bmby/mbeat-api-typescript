import { BmbyRest } from './BmbyRest';
import { ElectionSurvey } from '../entities/ElectionSurvey';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../QueryParams';
import { PaginatedList } from '../PaginatedList';
import { ElectionVoter } from '../entities/ElectionVoter';
import { ElectoralAlert } from '../entities/ElectoralAlert';
import { ElectionSummary } from '../entities/ElectionSummary';
import { ElectionSurveyResult } from '../entities/ElectionSurvayResult';
import { ElectoralUser } from '../entities/ElectoralUser';

export class ElectoralRest extends BmbyRest {
    getUser(): Promise<ElectoralUser> {
        let result = this.get("/electoral/user", true);

        return new Promise<ElectoralUser>((resolve, reject) => {
            result
            .then(function(response) {
                var user = new ElectoralUser();
                user.data = response.data;
                resolve(user);
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

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

    listVoters(params: QueryParams): Promise<Array<ElectionVoter>> {
        let result = this.get("/electoral/voters" + params.queryString(), true);

        return new Promise<Array<ElectionVoter>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let voters = new Array<ElectionVoter>();
                    
                    for (let i in response.data) {
                        let voter = new ElectionVoter();
                        voter.data = response.data[i];
                        voters.push(voter);
                    }

                    resolve(voters);
                } catch(ex) {
                    reject(response);
                }
            })
            .catch(function(response){
                reject(response);
            });
        });
    }

    listAlerts(params: QueryParams): Promise<Array<ElectoralAlert>> {
        let result = this.get("/electoral/listalerts" + params.queryString(), true);

        return new Promise<Array<ElectoralAlert>>((resolve, reject) => {
            result
            .then(function(response) {
                try {
                    let alerts = new Array<ElectoralAlert>();
                    
                    for (let i in response.data) {
                        let alert = new ElectoralAlert();
                        alert.data = response.data[i];
                        alerts.push(alert);
                    }

                    resolve(alerts);
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