import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category';
import { MovieDetailsComponent, SeriesDetailsComponent } from './details';
import { CastSectionComponent } from './details';
import { CrewSectionComponent } from './details/crew-section/crew-section.component';
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
        component: MovieDetailsComponent,
      },
      {
        path: 'tv/:id',
        component: SeriesDetailsComponent,
        children: [
          {
            path: 'cast',
            component: CastSectionComponent,
          },
          {
            path: 'crew',
            component: CrewSectionComponent,
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'cast',
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
