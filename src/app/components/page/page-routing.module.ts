
// Angular
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

// Components
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from './../../shared/shared.module';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		children: [
			{
				path: 'contact-us',
				component: ContactUsComponent
			},
	        {
	            path: '**',
	            redirectTo: 'contact-us'
	        }
		]
	},
];

@NgModule({
	declarations: [
		BaseComponent,
		HomeComponent,
		ContactUsComponent
	],
	imports: [
		CommonModule,
        SharedModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class PageRoutingModule {
}
