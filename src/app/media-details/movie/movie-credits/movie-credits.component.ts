import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable, switchMap } from 'rxjs';
import { Credits } from '../../types';
import { MovieApiService } from '../movie-api.service';
import { combineByDepartment } from '../../combineByDepartment';

@Component({
  selector: 'ez-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.scss'],
})
export class MovieCreditsComponent {
  constructor(
    private readonly api: MovieApiService,
    private readonly route: ActivatedRoute
  ) {}

  public credits$ = this.route.parent?.paramMap.pipe(
    switchMap((params) => this.requestCredits(params.get('id'))),
    map((response) => combineByDepartment(response))
  );

  private requestCredits(id: string | null): Observable<Credits> {
    if (!id) {
      return EMPTY;
    }
    return this.api.requestCredits(id);
  }
}
