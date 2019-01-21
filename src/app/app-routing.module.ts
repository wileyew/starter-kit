import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import {ChaptersModule} from './chapters/chapters.module';
import { ContactModule } from './contact/contact.module';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: '', pathMatch: 'full', component: HomeModule },
  { path: 'contact', redirectTo: '', pathMatch: 'full', component: ContactModule },
  { path: 'chapters', redirectTo: '', pathMatch: 'full', component: ChaptersModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HomeModule, ContactModule,ChaptersModule],
  providers: []
})
export class AppRoutingModule { }
