import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeriesDetailComponent} from './series-detail/series-detail.component';

const routes: Routes = [
  { path:'series', component: SeriesComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'', redirectTo: '/dashboard', pathMatch:'full'},
  { path:'detail/:id', component: SeriesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
