import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable, shareReplay, switchMap } from 'rxjs';
import { Credits } from '../../types';
import { SeriesApiService } from '../series-api.service';
import { combineByDepartment } from '../../combineByDepartment';

@Component({
  selector: 'ez-series-credits',
  templateUrl: './series-credits.component.html',
  styleUrls: ['./series-credits.component.scss'],
})
export class SeriesCreditsComponent {
  constructor(
    private readonly api: SeriesApiService,
    private readonly route: ActivatedRoute
  ) {}

  private credits$ = this.route.parent?.paramMap.pipe(
    switchMap((params) => this.requestCredits(params.get('id'))),
    shareReplay()
  );

  private requestCredits(id: null | string): Observable<Credits> {
    if (!id) {
      return EMPTY;
    }
    return this.api.requestCredits(id);
  }

  public cast$ = this.credits$?.pipe(map((response) => response.cast));

  public crew$ = this.credits$?.pipe(
    map((response) => combineByDepartment(response.crew))
  );
}
