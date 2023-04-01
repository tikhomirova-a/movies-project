import { Component } from '@angular/core';
import { MovieDetailsApiService } from './movie-details-api.service';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, map, shareReplay } from 'rxjs';
import { Credits, MovieDetails } from './types';

@Component({
  selector: 'ez-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  constructor(
    private readonly detailsApi: MovieDetailsApiService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  private id = this.activatedRoute.snapshot.paramMap.get('id');

  // private id$ = this.activatedRoute.paramMap.subscribe(paramMap => paramMap.get('id'));

  public details$ = this.requestDetails();

  private credits$ = this.requestCredits().pipe(shareReplay());

  public cast$ = this.credits$.pipe(map((response) => response.cast));

  public crew$ = this.credits$.pipe(map((response) => response.crew));

  private requestDetails(): Observable<MovieDetails> {
    if (!this.id) {
      return EMPTY;
    }
    return this.detailsApi.requestMovieDetails(this.id);
  }

  private requestCredits(): Observable<Credits> {
    if (!this.id) {
      return EMPTY;
    }
    return this.detailsApi.requestMovieCredits(this.id);
  }
}
