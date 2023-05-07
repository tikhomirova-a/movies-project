import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category';
import { MovieComponent, MovieCreditsComponent } from './media-details/movie';
import {
  SeriesComponent,
  SeriesCreditsComponent,
} from './media-details/series';
import { MovieListComponent } from './movie-list';
import { PersonDetailsComponent } from './person-details';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CategoryComponent,
      },
      {
        path: 'person/:id',
        component: PersonDetailsComponent,
      },
      {
        path: 'movie/:id',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: MovieComponent,
          },
          {
            path: 'credits',
            component: MovieCreditsComponent,
          },
        ],
      },
      {
        path: 'tv/:id',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: SeriesComponent,
          },
          {
            path: 'credits',
            component: SeriesCreditsComponent,
          },
        ],
      },
      {
        path: 'movie',
        component: MovieListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
