import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
	selector: 'app-slideshow-poster',
	templateUrl: './slideshow-poster.component.html',
	styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
	
	@Input() recentMovies: Movie[] = [];

	slideOpts = {
		initialSlide: 1,
		speed: 400,
		slidesPerView: 3.3,
		freeMode: true
	};


	constructor() { }

	ngOnInit() { }

}
