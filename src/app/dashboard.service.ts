import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary()
  {
    var TeamMembersSummary = [
      {Region: 'Developers', TeamMembersCount: '15', AvailableMembers: '12'},
      {Region: 'DMA', TeamMembersCount: '45', AvailableMembers: '40'},
      {Region: 'Research Analysis', TeamMembersCount: '80', AvailableMembers: '70'}
    ];

    return TeamMembersSummary;
  }
}
