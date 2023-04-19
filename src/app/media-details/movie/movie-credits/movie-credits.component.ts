import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, map, Observable, shareReplay, switchMap } from 'rxjs';
import { Person } from '../../../category/types';
import { Credits } from '../../types';
import { MovieApiService } from '../movie-api.service';

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

  private credits$ = this.route.parent?.paramMap.pipe(
    switchMap((params) => this.requestCredits(params.get('id'))),
    shareReplay()
  );

  public cast$ = this.credits$?.pipe(map((response) => response.cast));

  public crew$ = this.credits$?.pipe(map((response) => response.crew));

  private requestCredits(id: string | null): Observable<Credits> {
    if (!id) {
      return EMPTY;
    }
    return this.api.requestCredits(id);
  }

  public trackPerson(_: number, person: Person): Person['id'] {
    return person.id;
  }
}
