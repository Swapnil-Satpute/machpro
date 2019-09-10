import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Demo {
  first: string;
  last: string;
  email: string;
  address: string;
  created: string;
  balance: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit  {

  result: Demo[] = [];
  result1;
  errorFromSubscribe;
  errorFromCatch;
  displayItems;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns1: string[] = ['first', 'last', 'email', 'address', 'created', 'balance'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource(this.result1);

  constructor(private http: Http) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applyFilter1(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
  city = 'mumbai';
  ngOnInit()
  {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=094aa776d64c50d5b9e9043edd4ffd00')
    .subscribe((res: Response) => {
      this.result = res.json();
      console.log(this.result);
     }, error => {
      console.log(error);
      this.errorFromSubscribe = error;
    });

  this.http.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
  .subscribe((res: Response) => {
    this.result = res.json();
   }, error => {
    console.log(error);
    this.errorFromSubscribe = error;
  });

  this.dataSource.sort = this.sort;
  this.dataSource.paginator = this.paginator;

this.result1=this.result;

}

}
