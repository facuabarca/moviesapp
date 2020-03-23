import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from 'src/app/components/detail/detail.component';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


	txtSearch: string = '';
	ideas: string[] = ['Spiderman', 'Lord of the rings', 'Letter to king', 'Yuyu hakusho', 'Avatar'];
	movies: Movie[] = [];
	showSpinner = false;
	constructor(private movieService: MoviesService, private modalCtrl: ModalController) { }

	onSearch(e: any) {
		const value = e.detail.value;
		console.log('valor input::', value);
		if (value.length === 0) {
			this.movies = [];
			this.showSpinner = false;
			return;
		} else {
			this.showSpinner = true;
			this.movieService.searchMovie(value).subscribe(resp => {
				this.movies = resp.results
				this.showSpinner = false;
			});
		}
	}

	onClickIdea(value: string) {
		this.txtSearch = value;
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
