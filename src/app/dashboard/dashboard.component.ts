import { Component, OnInit } from '@angular/core';
import { Series } from '../series'
import { SeriesService } from '../series.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topSeries : Series[];

  constructor(private seriesService : SeriesService) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries(): void {
    this.seriesService.getSeries()
        .subscribe(series => this.topSeries = series.slice(0,4));
  }
}
