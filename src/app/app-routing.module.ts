import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewComponent } from './new/new.component';
import { New1Component } from './new1/new1.component';
import { New2Component } from './new2/new2.component';
import { New3Component } from './new3/new3.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: 'news',
		component: NewsComponent,
	},
	{
		path: 'news/0',
		component: NewComponent,
	},
	{
		path: 'news/1',
		component: New1Component,
	},
	{
		path: 'news/2',
		component: New2Component,
	},
	{
		path: 'news/3',
		component: New3Component,
	},
	{
		path: 'team',
		component: TeamComponent,
	},
	{
		path: 'downloads',
		component: DownloadsComponent,
	},
	{
		path: '**',
		component: Page404Component,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
