import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieShort, MovieLong } from '@core/interfaces/movie.interface';

@Injectable({
	providedIn: 'root',
})
export class MovieService {
	constructor(private http: HttpClient) {}

	getMovies(): Observable<MovieShort[]> {
		return this.http.get<MovieShort[]>('/api/movies');
	}

	getMovie(movieId: string): Observable<MovieLong> {
		return this.http.get<MovieLong>(`/api/movies/${movieId}`);
	}
}
