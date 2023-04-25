import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable, shareReplay, switchMap } from 'rxjs';
import { Movie, Series } from 'src/app/category/types';
import { MovieDetails, Review } from '../../types';
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
    switchMap((params) => this.requestMovieDetails(params.get('id'))),
    shareReplay()
  );

  public reviews$ = this.details$.pipe(
    map((response) => response.reviews.results)
  );

  public recommendations$ = this.details$.pipe(
    map((response) => response.recommendations.results)
  );

  private requestMovieDetails(id: string | null): Observable<MovieDetails> {
    if (!id) {
      return EMPTY;
    }
    return this.detailsApi.requestDetails(id);
  }

  public trackByReview(_: number, review: Review): Review['id'] {
    return review.id;
  }

  public trackByRecommendation(
    _: number,
    recommendation: Movie | Series
  ): Movie['id'] | Series['id'] {
    return recommendation.id;
  }
}
