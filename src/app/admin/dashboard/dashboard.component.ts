import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Designation: String;
  Username: String;
  NoOfTeamMembers: number;
  TotalCostOfAllProject: number;
  PendingTask: number;
  UpComingProjects: number;
  ProjectCost: number;

  selectedProject: string;

  CurrentExpenditure: number;
  AvailableFunds: number;

  Client: string[];
  Project: string[];
  Years: string[];
  TeamMembersSummary = [];
  TeamMember = [];



  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(private dashboardservice: DashboardService) {

   }

  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'John Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProject = 204;
    this.PendingTask = 15;
    this.UpComingProjects = 2;

    this.ProjectCost = 1111;
    this.CurrentExpenditure = 1111;
    this.AvailableFunds = 1111;



    this.Client = ['ABC Infotech Ltd.', 'IBM Software', 'Machbizz Markters', 'APSS Media'];
    this.Project = ['ProjectA', 'ProjectB', 'ProjectC', 'ProjectD'];
    this.Years = ['2017', '2018', '2019'];

    this.TeamMembersSummary = this.dashboardservice.getTeamMembersSummary();

    this.TeamMember =[
      {
        Region: 'Developers', Members: [
          {ID: 1, Name: 'Swapnil', Status: 'Available'},
          {ID: 2, Name: 'Bharat', Status: 'Busy'},
          {ID: 3, Name: 'Patil', Status: 'Available'},
          {ID: 4, Name: 'Priyanka', Status: 'Busy'},
        ]
      },
      {
        Region: 'DMA', Members: [
          {ID: 5, Name: 'Nitin', Status: 'Busy'},
          {ID: 6, Name: 'Sagar', Status: 'Available'},
          {ID: 7, Name: 'Prashant', Status: 'Busy'},
          {ID: 8, Name: 'Rahul', Status: 'Available'},
        ]
      },
      {
        Region: 'RA', Members: [
          {ID: 9, Name: 'Nadim', Status: 'Available'},
          {ID: 10, Name: 'Aarti', Status: 'Available'},
          {ID: 11, Name: 'Prashant', Status: 'Busy'},
          {ID: 12, Name: 'Deepika', Status: 'Busy'},
        ]
      }
    ];

    console.log('Init');
  }

  onProjectChange(event: any)
  {
    this.selectedProject = event.target.value;
    console.log(this.selectedProject);

    if(event.target.value === 'ProjectA')
    {
      this.ProjectCost = 1111;
      this.CurrentExpenditure = 1111;
      this.AvailableFunds = 1111;
    } else if(event.target.value === 'ProjectB')
    {
      this.ProjectCost = 2222;
      this.CurrentExpenditure = 2222;
      this.AvailableFunds = 2222;
    } else if(event.target.value === 'ProjectC')
    {
      this.ProjectCost = 3333;
      this.CurrentExpenditure = 3333;
      this.AvailableFunds = 3333;
    } else if(event.target.value === 'ProjectD')
    {
      this.ProjectCost = 4444;
      this.CurrentExpenditure = 4444;
      this.AvailableFunds = 4444;
    }
  }

  toggle(i: any) {
    this.show = !this.show;
console.log(i);
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


}

