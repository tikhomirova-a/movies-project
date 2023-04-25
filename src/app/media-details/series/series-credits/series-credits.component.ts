import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable, switchMap } from 'rxjs';
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

  public credits$ = this.route.parent?.paramMap.pipe(
    switchMap((params) => this.requestCredits(params.get('id'))),
    map((response) => combineByDepartment(response))
  );

  private requestCredits(id: null | string): Observable<Credits> {
    if (!id) {
      return EMPTY;
    }
    return this.api.requestCredits(id);
  }
}
