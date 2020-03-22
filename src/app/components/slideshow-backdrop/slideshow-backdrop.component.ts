import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { DetailComponent } from '../detail/detail.component';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-slideshow-backdrop',
	templateUrl: './slideshow-backdrop.component.html',
	styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

	@Input() movies: Movie[] = [];
	
	slideOpts = {
		initialSlide: 1,
		speed: 400,
		slidesPerView: 1.2,
		freeMode: true
	};

	constructor(private modalCtrl: ModalController) { }

	ngOnInit() { }

	async openDetail(movieId: string) {
		const modal = await this.modalCtrl.create({
			component: DetailComponent,
			componentProps: {
				id: movieId
			}
		});

		modal.present();
	}



}
