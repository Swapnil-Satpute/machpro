import { Component, OnInit } from '@angular/core';

import {Chart} from 'chart.js';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

chart = [];
families = [];
max = [];
temp_max = [];
temp_min = [];
alldates = [];
constructor(   private weather: WeatherService ) {


  }

  ngOnInit() {

  this.weather.get_products().subscribe((res : any[])=>{
    this.families = res,
    console.log(res);
    res.forEach(y => {
        return this.temp_max.push(y.temp.max);
      });
      res.forEach(y => {
        return this.temp_min.push(y.temp.min);
      });
      res.forEach(y => {
        return this.alldates.push(y.dt);
      });

    });
}
}
