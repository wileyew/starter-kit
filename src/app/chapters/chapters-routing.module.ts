import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { AboutComponent } from './about.component';

const routes: Routes = Route.withShell([
  { path: 'chapters', component: ChaptersComponent, data: { title: extract('Chapters') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChaptersRoutingModule { }
