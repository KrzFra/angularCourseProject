import { Provider } from '@angular/core';
import { MovieStubService } from '@core/services/movie/movie-stub.service';
import { MovieService } from '@core/services/movie/movie.service';
import { ScreeningsStubService } from '@core/services/schedule/screenings-stub.service';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { environment } from 'src/environments/environment';

const stubServices: Provider[] = [
	{
		provide: MovieService,
		useClass: MovieStubService,
	},
	{
		provide: ScreeningsService,
		useClass: ScreeningsStubService,
	},
];

export const stubServiceProviders: Provider[] = environment.useStubServices ? stubServices : [];