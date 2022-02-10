import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Campaign } from '../campaign/campaign';
import { CampaignComponent } from '../campaign/campaign.component';
import { CampaignService } from '../campaign/campaign.service';


@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {


  campaigns: Campaign[] = [];


  constructor(private campaignService: CampaignService,
    private router: Router) { }


  ngOnInit(): void {
  }

  goToCampaignList() {
    this.router.navigate(['/campaigns'])
  }

  onSubmit(addForm: NgForm): void {
    this.campaignService.addCampaign(addForm.value).subscribe(
      (response: Campaign) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.goToCampaignList();
  }
}
