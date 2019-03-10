import { BmbyRest } from './BmbyRest';
import { ElectionSurvey } from '../entities/ElectionSurvey';
import { BmbyHttpResponse, BmbyContentType } from '../IBmbyHttpClient';
import { QueryParams } from '../QueryParams';
import { OutlookUserInfo } from '../entities/OutlookUserInfo';
import { OutlookClient } from '../entities/OutlookClient';
import { BmbyCrm } from '../entities/BmbyCrm';
import { OutlookCrm } from '../entities/OutlookCrm';
import { OutlookEntity } from '../entities/OutlookEntity';
import { InterestedDetailsQueryParams } from '../querystrings/InterestedDetailsQueryParams';

export class OutlookRest extends BmbyRest {

    addinRegister(value:OutlookEntity):Promise<OutlookUserInfo>{

        let result = this.post("/outlook/addin-register", value.data, true, BmbyContentType.Json);

        return new Promise<OutlookUserInfo>((resolve, reject) => {
            result
                .then(function (response) {
                    var registerApp = new OutlookUserInfo();
                    registerApp.data = response.data;
                    resolve(registerApp);
                })
                .catch(function (response) {
                    reject(response);
                });
        });
    }

    getInterestedDetails(params: InterestedDetailsQueryParams): Promise<Array<OutlookClient>> {
        let queryString = params.queryString();
        let result = this.get("/outlook/get-interested-details" + queryString, true);
        
        return new Promise<Array<OutlookClient>>((resolve, reject) => {
            result
                .then(function (response) {

                    try {                        let clients = new Array<OutlookClient>();                        for (let i in response.data) {                            let client = new OutlookClient();                            client.data = response.data[i];                            clients.push(client);                        }                        resolve(clients);                    }                    catch(ex)                    {                        console.log(ex);                        reject(result);                    };
                })
                .catch(function (response) {
                    reject(response);
                });
        });


    }

    addCrmToBmby(value: OutlookCrm): Promise<BmbyHttpResponse> {

        return this.post("/outlook/add-crm-to-bmby", value.data, true, BmbyContentType.Json);
    }
       
}