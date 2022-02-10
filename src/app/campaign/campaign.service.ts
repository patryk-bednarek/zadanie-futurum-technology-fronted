import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Campaign } from "./campaign";
import { environment } from "src/environments/environment";


@Injectable({
    providedIn: "root"
})
export class CampaignService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getCampaigns(): Observable<Campaign[]> {
        return this.http.get<Campaign[]>(`${this.apiServerUrl}/api/all`);
    }

    public addCampaign(campaign: Campaign): Observable<Campaign> {
        return this.http.post<Campaign>(`${this.apiServerUrl}/api/add`, campaign);
    }

    public updateCampaign(campaign: Campaign): Observable<Campaign> {
        return this.http.put<Campaign>(`${this.apiServerUrl}/api/update`, campaign);
    }

    public deleteCampaign(campaignId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/delete/${campaignId}`);
    }
}