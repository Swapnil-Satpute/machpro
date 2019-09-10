import { Injectable } from '@angular/core';
/** import { HttpClient } from 'selenium-webdriver/http';*/
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseUrl: String;
  arrBirds: string [];

  constructor(private httpClient: HttpClient) {

   }

   getAllProject(): Observable<any>
   {
    console.log('2');
    return this.httpClient.get('./db.json');

    /*this.httpClient.get('./db.json', {responseType:"json"}).subscribe(
      res =>{
        console.log('In Sub');
        this.arrBirds = res as string [];
      console.log(this.arrBirds);
  },
    (err: HttpErrorResponse) => {
    console.log (err.message);
    }
  );*/
   }
}
