import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { DetailComponent } from '../detail/detail.component';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-slideshow-poster',
	templateUrl: './slideshow-poster.component.html',
	styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
	
	@Input() movies: Movie[] = [];

	slideOpts = {
		initialSlide: 1,
		speed: 400,
		slidesPerView: 3.3,
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
