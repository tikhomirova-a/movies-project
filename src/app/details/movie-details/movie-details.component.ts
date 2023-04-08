import { Component } from '@angular/core';
import { DetailsApiService } from '../details-api.service';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, map, shareReplay, switchMap } from 'rxjs';
import { Credits, MovieDetails } from '../types';

@Component({
  selector: 'ez-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  constructor(
    private readonly detailsApi: DetailsApiService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public details$ = this.activatedRoute.paramMap.pipe(
    switchMap((params) => this.requestDetails(params.get('id')))
  );

  private credits$ = this.activatedRoute.paramMap.pipe(
    switchMap((params) => this.requestCredits(params.get('id'))),
    shareReplay()
  );

  public cast$ = this.credits$.pipe(map((response) => response.cast));

  public crew$ = this.credits$.pipe(map((response) => response.crew));

  private requestDetails(id: string | null): Observable<MovieDetails> {
    if (!id) {
      return EMPTY;
    }
    return this.detailsApi.requestMovieDetails(id);
  }

  private requestCredits(id: string | null): Observable<Credits> {
    if (!id) {
      return EMPTY;
    }
    return this.detailsApi.requestCredits(id, 'movie');
  }
}
