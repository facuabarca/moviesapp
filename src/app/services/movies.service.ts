import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseApi } from '../interfaces/movie';

@Injectable({
	providedIn: 'root'
})
export class MoviesService {

	constructor(private http: HttpClient) {

	}

	execQuery<T>() {
		return this.http.get<T>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2018-10-22&api_key=3a964a0914758db48d3a98862667c5a1&language=es&include_image_language=es`);
	}

	getFeature() {
		return this.execQuery<ResponseApi>();
		// return this.http.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2018-10-22&api_key=3a964a0914758db48d3a98862667c5a1&language=es&include_image_language=es`);
	}
}

