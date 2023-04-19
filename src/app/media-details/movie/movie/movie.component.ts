import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { MovieDetails } from '../../types';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'ez-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  constructor(
    private readonly detailsApi: MovieApiService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public details$ = this.activatedRoute.paramMap.pipe(
    switchMap((params) => this.requestMovieDetails(params.get('id')))
  );

  private requestMovieDetails(id: string | null): Observable<MovieDetails> {
    if (!id) {
      return EMPTY;
    }
    return this.detailsApi.requestDetails(id);
  }
}
