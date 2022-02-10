import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CampaignService } from './campaign/campaign.service';
import { CampaignComponent } from './campaign/campaign.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { FormsModule } from '@angular/forms';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component'

@NgModule({
  declarations: [
    AppComponent,
    CampaignComponent,
    CreateCampaignComponent,
    UpdateCampaignComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CampaignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
