import { Injectable } from '@angular/core';
import { Series } from './series';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const httpSeries=[
      {id:1, name:'Breaking Bad'},
      {id:2, name:'GOT'},
      {id:3, name:'Sense8'},
      {id:4, name:'Stranger Things'},
      {id:5, name:'Naruto'},
      {id:6, name:'Naruto Shippuden'},
      {id:7, name:'Mirror'},
      {id:8, name:'Death Note'},
      {id:9, name:'Big Bang Theory'},
      {id:10, name:'Friends'}, 
      {id: 11, name: 'OnePiece'},
      {id: 12, name: 'How I Met Your Mother'},
      {id: 13, name: 'Arrow'},
      {id: 14, name: 'Flash'},
      {id: 15, name: 'Harry Potter'},
    ];
    const newSeries=[
      {id:1, name:'SuperGirl'},
      {id:2, name:'Wire'},
      {id:3, name:'Sherlock Holmes'},
      {id:4, name:'Fantastic Beasts'},
      {id:5, name:'Pirates Of Caribbean'},
      {id:6, name:'Batman'}
    ];
      return {newSeries};
  }
  
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(newSeries: Series[]): number{
        return newSeries.length > 0 ? Math.max(...newSeries.map(series => series.id))+1 : 11;
      }
  constructor() { }
}
