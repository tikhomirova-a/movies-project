import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable, shareReplay, switchMap } from 'rxjs';
import { PersonDetailsApiService } from './person-details-api.service';
import { PersonDetailsWCredits } from './types';

@Component({
  selector: 'ez-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent {
  constructor(
    private readonly api: PersonDetailsApiService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public person$ = this.activatedRoute.paramMap.pipe(
    switchMap((paramMap) => this.requestDetails(paramMap.get('id'))),
    shareReplay()
  );

  public cast$ = this.person$.pipe(
    map((details: PersonDetailsWCredits) => details.combined_credits.cast)
  );

  public crew$ = this.person$.pipe(
    map((details: PersonDetailsWCredits) => details.combined_credits.crew)
  );

  private requestDetails(id: string | null): Observable<PersonDetailsWCredits> {
    if (!id) {
      return EMPTY;
    }
    return this.api.requestPersonDetails(id);
  }
}
