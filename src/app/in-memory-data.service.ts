import { Injectable } from '@angular/core';
import { Series } from './series';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const httpSeries=[
      {id: 11, name: 'OnePiece'},
      {id: 12, name: 'How I Met Your Mother'},
      {id: 13, name: 'Arrow'},
      {id: 14, name: 'Flash'},
      {id: 15, name: 'Harry Potter'},
    ];
    return {httpSeries};
  }
  
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(httpSeries: Series[]): number{
        return httpSeries.length > 0 ? Math.max(...httpSeries.map(series => series.id))+1 : 11;
      }
  constructor() { }
}
