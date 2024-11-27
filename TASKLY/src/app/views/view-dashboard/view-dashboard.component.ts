import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TaskStatsComponent } from '../../components/task-stats/task-stats.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-dashboard',
  standalone: true,
  imports: [NavComponent, DashboardComponent, TaskStatsComponent, FooterComponent],
  templateUrl: './view-dashboard.component.html',
  styleUrl: './view-dashboard.component.css'
})
export class ViewDashboardComponent {

}
