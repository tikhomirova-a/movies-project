import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category';
import { MovieDetailsComponent, SeriesDetailsComponent } from './details';
import { CastSectionComponent } from './details';
import { PersonDetailsComponent } from './person-details';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CategoryComponent,
  },
  {
    path: 'person',
    children: [
      {
        path: ':id',
        component: PersonDetailsComponent,
      },
    ],
  },
  {
    path: 'movie',
    children: [
      {
        path: ':id',
        component: MovieDetailsComponent,
      },
    ],
  },
  {
    path: 'tv',
    children: [
      {
        path: ':id',
        component: SeriesDetailsComponent,
        children: [
          {
            path: 'cast',
            component: CastSectionComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
