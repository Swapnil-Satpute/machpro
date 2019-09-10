import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';
import { ProjectComponent } from './project/project.component';


import {MatButtonModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';

import {MatTableModule} from '@angular/material';
import {MatInputModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatSortModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { projection } from '@angular/core/src/render3';
import { ProjectsService } from './projects.service';
import {FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


import { WeatherService } from './weather.service';

import { from } from 'rxjs';
@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectComponent
  ],
  imports: [
// tslint:disable-next-line: deprecation
    CommonModule, NgbModule, AngularFileUploaderModule, FormsModule, HttpModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule

  ],
  exports: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent
  ],
  providers: [DashboardService, ProjectsService, WeatherService]
})
export class AdminModule { }
