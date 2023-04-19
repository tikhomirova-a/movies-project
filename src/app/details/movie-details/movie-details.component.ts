import { Component } from '@angular/core';
import { DetailsApiService } from '../details-api.service';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, map, shareReplay, switchMap } from 'rxjs';
import { Credits, MovieDetails } from '../types';
import { Person } from 'src/app/category/types';

@Component({
  selector: 'ez-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  constructor(
    private readonly detailsApi: DetailsApiService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public details$ = this.activatedRoute.paramMap.pipe(
    switchMap((params) => this.requestDetails(params.get('id')))
  );

  private credits$ = this.activatedRoute.paramMap.pipe(
    switchMap((params) => this.requestCredits(params.get('id'))),
    shareReplay()
  );

  private combineByDepartment(crew: Person[]): Person[] {
    const map = new Map<string, Person>();
    for (const person of crew) {
      person.jobs = [];
      const key = `${person.id.toString()}_${
        person.department?.toLowerCase() || ''
      }`;
      console.log(key);
      if (map.has(key) && person.job) {
        map.get(key)?.jobs.push(person.job);
      } else if (!map.has(key)) {
        if (person.job) {
          person.jobs.push(person.job);
        }
        map.set(key, person);
      }
    }
    console.log(Array.from(map.values()));
    return Array.from(map.values());
  }

  public cast$ = this.credits$.pipe(map((response) => response.cast));

  public crew$ = this.credits$.pipe(
    map((response) => response.crew),
    map((crew) => this.combineByDepartment(crew))
  );

  private requestDetails(id: string | null): Observable<MovieDetails> {
    if (!id) {
      return EMPTY;
    }
    return this.detailsApi.requestMovieDetails(id);
  }

  private requestCredits(id: string | null): Observable<Credits> {
    if (!id) {
      return EMPTY;
    }
    return this.detailsApi.requestCredits(id, 'movie');
  }
}
