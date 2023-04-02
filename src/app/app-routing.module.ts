import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category';
import { MovieDetailsComponent } from './movie-details';
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
    path: ':media',
    children: [
      {
        path: ':id',
        component: MovieDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
