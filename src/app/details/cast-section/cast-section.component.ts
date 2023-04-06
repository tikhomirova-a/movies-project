import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, shareReplay, switchMap, map } from 'rxjs';
import { Person } from 'src/app/category/types';
import { DetailsApiService } from '../details-api.service';
import { Credits } from '../types';

@Component({
  selector: 'ez-cast-section',
  templateUrl: './cast-section.component.html',
  styleUrls: ['./cast-section.component.scss'],
})
export class CastSectionComponent {
  constructor(
    private readonly detailsApi: DetailsApiService,
    private readonly route: ActivatedRoute
  ) {}

  public cast$ = this.route.paramMap.pipe(
    switchMap((params) => this.requestCredits(params.get('id'))),
    map((response) => response.cast)
  );

  private requestCredits(id: string | null): Observable<Credits> {
    if (!id) {
      return EMPTY;
    }
    return this.detailsApi.requestCredits(id, 'tv').pipe(shareReplay());
  }

  public trackPerson(_: number, person: Person): Person['id'] {
    return person.id;
  }
}
