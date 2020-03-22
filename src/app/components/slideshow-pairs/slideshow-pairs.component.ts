import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
	selector: 'app-slideshow-pairs',
	templateUrl: './slideshow-pairs.component.html',
	styleUrls: ['./slideshow-pairs.component.scss'],
})
export class SlideshowPairsComponent implements OnInit {

	@Input() movies: Movie[] = [];
	@Output() onLoadMore = new EventEmitter();

	slideOpts = {
		initialSlide: 1,
		speed: 400,
		slidesPerView: 3.3,
		freeMode: true,
		spaceBetween: -10
	};

	constructor(private modalCtrl: ModalController) { }

	ngOnInit() { }

	loadMore() {
		console.log('Load more...');
		this.onLoadMore.emit();
	}

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
