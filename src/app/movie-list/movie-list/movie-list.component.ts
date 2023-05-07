import { Component } from '@angular/core';
import { MovieListApiService } from '../movie-list-api.service';

@Component({
  selector: 'ez-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  constructor(private readonly api: MovieListApiService) {}

  public movies$ = this.api.discoverMovies();

  public genres$ = this.api.getGenres();
}
