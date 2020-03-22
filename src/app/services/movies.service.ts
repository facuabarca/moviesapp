import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseApi } from '../interfaces/movie';
import { environment } from '../../environments/environment';

const urlApi: string = environment.urlApi;
const apiKey: string = environment.apiKey;
const language: string = 'es';

@Injectable({
	providedIn: 'root'
})
export class MoviesService {

	constructor(private http: HttpClient) {

	}

	execQuery<T>(query: string) {
		return this.http.get<T>(`${urlApi}/${query}&api_key=${apiKey}&language=${language}&include_image_language=${language}`);
	}

	getFeature() {

		const today = new Date();

		const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

		const actualMonth = today.getMonth() + 1;

		let monthString;

		if (actualMonth < 10) {
			monthString = '0' + actualMonth;
		} else {
			monthString = actualMonth;
		}

		const initDate = `${today.getFullYear()}-${monthString}-01`;
		const endDate = `${today.getFullYear()}-${monthString}-${lastDay}`;

		return this.execQuery<ResponseApi>(`discover/movie?primary_release_date.gte=${initDate}&primary_release_date.lte=${endDate}`);
	}

	getPopularMovies() {
		const query = 'discover/movie?sort_by=popularity.desc';
		return this.execQuery<ResponseApi>(query);
	}

}

