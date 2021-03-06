import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import { FormsModule } from '@angular/forms';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
import { SeriesSearchComponent } from './series-search/series-search.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeriesDetailComponent,
    MessageComponent,
    DashboardComponent,
    SeriesSearchComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //HttpClientInMemoryWebApiModule.forRoot(
    //InMemoryDataService, {dataEncapsulation : false}
    //)
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
