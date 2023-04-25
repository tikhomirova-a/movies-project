import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, switchMap } from 'rxjs';
import { SeriesDetails } from '../../types';
import { SeriesApiService } from '../series-api.service';

@Component({
  selector: 'ez-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
})
export class SeriesComponent {
  constructor(
    private readonly api: SeriesApiService,
    private readonly route: ActivatedRoute
  ) {}

  public details$ = this.route.paramMap.pipe(
    switchMap((params) => this.requestDetails(params.get('id')))
  );

  private requestDetails(id: null | string): Observable<SeriesDetails> {
    if (!id) {
      return EMPTY;
    }
    return this.api.requestDetails(id);
  }
}
