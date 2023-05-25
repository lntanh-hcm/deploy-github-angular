import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'deploy-github-angular';
	constructor(
		private _activeRoute: ActivatedRoute,
	) {
		document.location.href = `https://view.officeapps.live.com/op/embed.aspx?src=http://uofficeapi.umc.edu.vn/v1/form/415915138191444/static/1684830510288`;
	}
}
