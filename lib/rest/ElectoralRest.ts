import { BmbyRest } from './BmbyRest';
import { Survay } from '../entities/Survay';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../QueryParams';
import { PaginatedList } from '../PaginatedList';

export class ElectoralRest extends BmbyRest {
    getNextSurvay(): Promise<Survay> {
        let result = this.get("/electoral/nextsurvay", true);

        return new Promise<Survay>((resolve, reject) => {
            result
            .then(function(response) {
                var Survay = new Survay();
                Survay.data = response.data;
                resolve(Survay);
            })
            .catch(function(response){
                reject(response);
            });
        });
    }
}
