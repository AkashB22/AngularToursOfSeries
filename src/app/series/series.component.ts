import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  allSeries : Series[];
  
  constructor(private seriesService : SeriesService) { }

  getComponentSeries(): void {
    this.seriesService.getSeries()
        .subscribe(series => {this.allSeries = series});
  }
  
  ngOnInit() {
    this.getComponentSeries();
  }

  add(name: string): void{
    name = name.trim();
    if(!name){
      return;
    }
    this.seriesService.addSeries({name} as Series)
      .subscribe(series => {
        this.allSeries.push(series);
      });
  }

  delete(series: Series): void{
    this.allSeries = this.allSeries.filter(oneByOneSeries => oneByOneSeries !== series);
    this.seriesService.deleteSeries(series).subscribe();
  }
}
