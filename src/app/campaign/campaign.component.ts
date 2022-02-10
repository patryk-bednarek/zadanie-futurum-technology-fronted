import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from './campaign';
import { CampaignService } from './campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  campaigns: Campaign[] = [];
  //editCampaign: Campaign;
  editCampaign = {} as Campaign



  constructor(private campaignService: CampaignService,
    private router: Router) { }



  ngOnInit() {
    this.getCampaigns();
  }

  public getCampaigns(): void {
    this.campaignService.getCampaigns().subscribe(
      (response: Campaign[]) => {
        this.campaigns = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onUpdateCampaign(campaign: Campaign): void {
    this.campaignService.updateCampaign(campaign).subscribe(
      (response: Campaign) => {
        console.log(response);
        this.getCampaigns();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(campaign: Campaign, mode: string): void {
    const container = document.getElementById('main-cointaner');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editCampaign = campaign;
      button.setAttribute('data-target', '#updateCampaignModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteCampaignModal');
    }
    container?.appendChild(button);
    button.click();
  }

  updateCampaign(id: number) {
    this.router.navigate(['update-campaign', id]);
  }

  deleteCampaign(id: number) {

  }


}
