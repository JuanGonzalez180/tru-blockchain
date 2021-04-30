import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';

const routes: Routes = []

@NgModule({
	declarations: [
		NavbarComponent,
		ControlMessagesComponent,
	],
	exports: [
		NavbarComponent,
		ControlMessagesComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
		// NgbDropdownModule
	]
})
export class SharedModule {
}
