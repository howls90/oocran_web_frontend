import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { NewComponent } from './new/new.component';
import { Page404Component } from './page404/page404.component';

import { New1Component } from './new1/new1.component';
import { New2Component } from './new2/new2.component';
import { New3Component } from './new3/new3.component';

import { BannerComponent } from './home/banner/banner.component';
import { GoalsComponent } from './home/goals/goals.component';
import { VideoComponent } from './home/video/video.component';
import { MissionComponent } from './home/mission/mission.component';
import { FeaturesComponent } from './home/features/features.component';
import { UpdatesComponent } from './home/updates/updates.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    AboutComponent,
    NewsComponent,
    DownloadsComponent,
    NewComponent,
    Page404Component,

    New1Component,
    New2Component,
    New3Component,

    BannerComponent,
    GoalsComponent,
    FeaturesComponent,
    VideoComponent,
    MissionComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatTableModule,
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
