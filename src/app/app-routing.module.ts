import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDevelopersComponent } from './components/list-developers/list-developers.component';
import { TwoWayDataComponent } from './components/two-way-data/two-way-data.component';
import { OthersComponent } from './components/others/others.component';

const routes: Routes = [
  {
    path: '',
    component: ListDevelopersComponent,
  },
  {
    path: 'two-way-data',
    component: TwoWayDataComponent,
  },
  {
    path: 'others',
    component: OthersComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
