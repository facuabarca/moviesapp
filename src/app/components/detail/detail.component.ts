import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieDetail, Cast } from '../../interfaces/movie';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

	@Input() id: string;
	movie: MovieDetail = {};
	actors: Cast[] = [];
	hideText: number = 150;
	slideOptionsActors = {
		initialSlide: 1,
		speed: 400,
		slidesPerView: 1.2,
		freeMode: true
	};

	constructor(private movieService: MoviesService, private modalCtrl: ModalController) { }

	ngOnInit() {
		this.movieService.getMovieDetail(this.id).subscribe(resp => {
			this.movie = resp;
		});

		this.movieService.getActorsMovie(this.id).subscribe(resp => {
			console.log('Actores:: ', resp);
			this.actors = resp.cast;
		})
	}
	back() {
		this.modalCtrl.dismiss();
	}

	addToFavorites() {

	}

}
