import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable, switchMap } from 'rxjs';
import { Person } from 'src/app/category/types';
import { DetailsApiService } from '../details-api.service';
import { Credits } from '../types';

@Component({
  selector: 'ez-crew-section',
  templateUrl: './crew-section.component.html',
  styleUrls: ['./crew-section.component.scss'],
})
export class CrewSectionComponent {
  constructor(
    private readonly detailsApi: DetailsApiService,
    private readonly route: ActivatedRoute
  ) {}

  private readonly routeChanges$ = this.route.parent?.paramMap;

  public readonly crew$ = this.routeChanges$?.pipe(
    switchMap((params) => this.requestCrew(params.get('id'))),
    map((response: Credits) => response.crew)
  );

  public trackPerson(_: number, person: Person): Person['id'] {
    return person.id;
  }

  private requestCrew(id: string | null): Observable<Credits> {
    if (!id) {
      return EMPTY;
    }
    return this.detailsApi.requestCredits(id, 'tv');
  }
}
