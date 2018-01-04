import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  // Fallback when no prior route is matched
  { path: '', redirectTo: '', pathMatch: 'full', component: HomeModule },
  { path: 'about', redirectTo: '', pathMatch: 'full', component: AboutModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, HomeModule, AboutModule],
  providers: []
})
export class AppRoutingModule { }
