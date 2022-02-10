import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './campaign/campaign.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component';

const routes: Routes = [
  { path: 'campaigns', component: CampaignComponent },
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  { path: 'create-campaign', component: CreateCampaignComponent },
  { path: 'update-campaign/:id', component: UpdateCampaignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
