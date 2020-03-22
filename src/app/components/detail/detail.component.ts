import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

	@Input() id: number;

	constructor() { }

	ngOnInit() {
		console.log('id movie:: ', this.id);
	 }

}
