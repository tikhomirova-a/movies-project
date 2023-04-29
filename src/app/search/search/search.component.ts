import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  Subscription,
} from 'rxjs';
import { Movie, Person, Series } from '../../category/types';
import { SearchApiService } from '../search-api.service';
import { SearchResult } from '../types';

@Component({
  selector: 'ez-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(private readonly api: SearchApiService) {}

  public input = new FormControl('');
  public subscription?: Subscription;
  public results$: Observable<SearchResult> | null = null;

  ngOnInit() {
    this.subscription = this.input.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((value) => {
        if (!value || value.length <= 2) {
          this.results$ = null;
          return;
        }
        this.results$ = this.api
          .search(value)
          .pipe(map((response) => this.filterByMediaType(response.results)));
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  private filterByMediaType(
    results: Array<Person | Movie | Series>
  ): SearchResult {
    const movies: Array<Movie> = [];
    const series: Array<Series> = [];
    const people: Array<Person> = [];
    for (const item of results) {
      switch (item.media_type) {
        case 'movie':
          movies.push(item);
          break;
        case 'tv':
          series.push(item);
          break;
        case 'person':
          people.push(item);
          break;
      }
    }
    return {
      movies,
      series,
      people,
    };
  }

  public trackByMediaItem(
    _: number,
    item: Person | Movie | Series
  ): Person['id'] | Movie['id'] | Series['id'] {
    return item.id;
  }
}
