import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
	selector: 'app-slideshow-backdrop',
	templateUrl: './slideshow-backdrop.component.html',
	styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

	@Input() recentMovies: Movie[] = [];
	
	slideOpts = {
		initialSlide: 1,
		speed: 400,
		slidesPerView: 1.2,
		freeMode: true
	};

	constructor() { }

	ngOnInit() { }

}
