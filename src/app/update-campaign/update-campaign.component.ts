import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../campaign/campaign';
import { CampaignComponent } from '../campaign/campaign.component';
import { CampaignService } from '../campaign/campaign.service';
import { CreateCampaignComponent } from '../create-campaign/create-campaign.component';

@Component({
  selector: 'app-update-campaign',
  templateUrl: './update-campaign.component.html',
  styleUrls: ['./update-campaign.component.css']
})
export class UpdateCampaignComponent implements OnInit {

  campaigns: Campaign[] = [];

  constructor(private campaignService: CampaignService,
    private router: Router,
    private campaignComponent: CampaignComponent,
    private createCampaignComponent: CreateCampaignComponent) { }

  ngOnInit(): void {
  }


}
