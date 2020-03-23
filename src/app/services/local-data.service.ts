import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetail } from '../interfaces/movie';
import { ToastController } from '@ionic/angular';


@Injectable({
	providedIn: 'root'
})
export class LocalDataService {

	movies: MovieDetail[] = [];

	constructor(private storage: Storage, private toastController: ToastController) { }


	saveMovie(movie: MovieDetail) {
		this.movies = this.movies.filter(movieItem => {
			return movie.title !== movieItem.title
		})
		this.movies.push(movie);
		this.presentToast('movie added successfull');
		this.storage.set('movies', this.movies);
		let message = "Movie added successfull!";
		this.presentToast(message);
	}

	async presentToast(message) {
		const toast = await this.toastController.create({
		  message,
		  duration: 1000
		});
		toast.present();
	  }
}
