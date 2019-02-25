import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Series } from './series';
import { mockSeries } from './mock-series';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SeriesService {
  private seriesUrl = 'api/httpSeries'; //URL for api
  
  constructor(private http : HttpClient, private messageService : MessageService) { }

  getSeries() : Observable<Series[]>{
    // TODO: send the message _after_ fetching the series data
    //this.messageService.add('SeriesService: fetched series');
    
    return this.http.get<Series[]>(this.seriesUrl).pipe(
      tap(_ => this.log('fetched Series')),
      catchError(this.handleError('getSeries', []))
    );
  };

  addSeries(series: Series): Observable<Series>{
    const httpOptions = {
      headers: new HttpHeaders({'ContentType' : 'application/json'})
    };

    return this.http.post(this.seriesUrl, series, httpOptions).pipe(
      tap((newSeries: Series) => this.log(`added series w/ id = ${series.id}`)),
      catchError(this.handleError<Series>('addSeries'))
    );
  }

  updateSeries(series: Series): Observable<Series>{
    const httpOptions = {
      headers: new HttpHeaders({'ContentType' : 'application/json'})
    };
  

    return this.http.put(this.seriesUrl, series, httpOptions).pipe(
      tap(_ => this.log(`updated Series id: ${series.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  };

  deleteSeries(series: Series | number): Observable<Series>{
    const httpOptions = {
      headers: new HttpHeaders({'ContentType' : 'application/json'})
    };

    const id = typeof(series) === 'number' ? series : series.id;
    const url = `${this.seriesUrl}/${id}`;
    return this.http.delete<Series>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Series>('deleteHero'))
    );
  }


  getASeries(id: number) : Observable<Series>{
    const url =  `${this.seriesUrl}/${id}`;

    // TODO: send the message after fetching the series data
    //this.messageService.add(`SeriesService: fetched a series: ${id}`)

    /** GET series by id. Will 404 if id not found */
    return this.http.get<Series>(url).pipe(
      tap(_ => this.log(`Fetched Series id = ${id}`)),
      catchError(this.handleError<Series>(`getHero id=${id}`))
    );
    
  }


/** Log a SeriesService message with the MessageService */
private log(message: string){
  this.messageService.add(`SeriesService : ${message}`);
}

private handleError<T>(operation='operation', result?:T){
  return (error:any): Observable<T> => {
    //TODO: send the logging to the remote infrastructure
    console.error(error);

    //TODO: better job to transform error to user consumption
    this.log(`${operation} failed: ${error.message}`);

    //TODO: let the app running by returning an empty result
    return of(result as T) ;
  };
}

searchSeries(term:string):Observable<Series[]>{
  if(!term.trim()){
    return of([]);
  }
  return this.http.get<Series[]>(`${this.seriesUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`Found heroes matching: ${term}`)),
    catchError(this.handleError<Series[]>('searchSeries', []))
  );
}
}
