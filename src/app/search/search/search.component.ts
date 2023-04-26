import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { Movie, Person, Series } from '../../category/types';
import { SearchApiService } from '../search-api.service';
import { SearchResult } from '../types';

@Component({
  selector: 'ez-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private readonly api: SearchApiService) {}

  public results$: Observable<SearchResult> | null = null;

  public onKeyUp(event: KeyboardEvent) {
    const value = (event.target as HTMLInputElement).value;
    if (value.length <= 2) {
      this.results$ = null;
      return;
    }
    this.results$ = this.api.search(value).pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((response) => this.filterByMediaType(response.results))
    );
  }

  private filterByMediaType(
    results: Array<Person | Movie | Series>
  ): SearchResult {
    const movies: Array<Movie> = [];
    const series: Array<Series> = [];
    const people: Array<Person> = [];
    results.map((item) => {
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
    });
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
