import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsApiService } from '../details-api.service';
import { SeriesDetails } from '../types';
import { EMPTY, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'ez-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.scss'],
})
export class SeriesDetailsComponent {
  constructor(
    private readonly detailsApi: DetailsApiService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public details$ = this.activatedRoute.paramMap.pipe(
    switchMap((params) => this.requestDetails(params.get('id')))
  );

  private requestDetails(id: string | null): Observable<SeriesDetails> {
    if (!id) {
      return EMPTY;
    }
    return this.detailsApi.requestSeriesDetails(id);
  }
}
