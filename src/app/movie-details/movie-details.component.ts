import { Component } from '@angular/core';
import { MovieDetailsApiService } from './movie-details-api.service';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, map, shareReplay } from 'rxjs';
import { Credits, MovieDetails, SeriesDetails } from './types';

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

  private readonly id = this.activatedRoute.snapshot.paramMap.get('id');

  private readonly mediaType =
    this.activatedRoute.snapshot.paramMap.get('media');

  public details$ = this.requestDetails();

  private credits$ = this.requestCredits().pipe(shareReplay());

  public cast$ = this.credits$.pipe(map((response) => response.cast));

  public crew$ = this.credits$.pipe(map((response) => response.crew));

  private requestDetails(): Observable<MovieDetails | SeriesDetails> {
    if (!this.id || (this.mediaType !== 'movie' && this.mediaType !== 'tv')) {
      return EMPTY;
    }
    return this.detailsApi.requestDetails(this.id, this.mediaType);
  }

  private requestCredits(): Observable<Credits> {
    if (!this.id || (this.mediaType !== 'movie' && this.mediaType !== 'tv')) {
      return EMPTY;
    }
    return this.detailsApi.requestCredits(this.id, this.mediaType);
  }
}
