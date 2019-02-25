import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Series } from '../series';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-series-search',
  templateUrl: './series-search.component.html',
  styleUrls: ['./series-search.component.css']
})
export class SeriesSearchComponent implements OnInit {
  series$: Observable<Series[]>;
  private searchTerms = new Subject<string>();

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.series$ = this.searchTerms.pipe(
      //wait for 300ms after each keyStroke before considering the term
      debounceTime(300),

      //ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time when the term changes
      switchMap((term: string) => this.seriesService.searchSeries(term)),
    );
  }

  search(term:string): void{
    this.searchTerms.next(term);
  }
}
