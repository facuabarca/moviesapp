import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

	recentMovies: Movie[] = [];

	slideOpts = {
		initialSlide: 1,
		speed: 400,
		slidesPerView: 1.2,
		freeMode: true
	};

	constructor(private movieService: MoviesService) { 
		
	}

	ngOnInit() {
		this.movieService.getFeature().subscribe( response => this.recentMovies = response.results);
	}

}
