import { Component, OnInit, Input } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.css']
})
export class SeriesDetailComponent implements OnInit {
  @Input() series : Series;

  constructor(private seriesService : SeriesService, 
              private activatedRoute : ActivatedRoute,
              private location : Location) { }

  ngOnInit() {
    this.getSeries();
  }

  getSeries() : void{
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.seriesService.getASeries(id)
      .subscribe(series => this.series = series);
  }

  goBack() : void{
    this.location.back();
  }

  save() : void{
    this.seriesService.updateSeries(this.series)
      .subscribe(() => this.goBack());
  }
}
