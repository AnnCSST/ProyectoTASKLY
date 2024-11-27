import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { TaskComponent } from "../../components/task/task.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [NavComponent, TaskComponent, FooterComponent],
  templateUrl: './view-tasks.component.html',
  styleUrl: './view-tasks.component.css'
})
export class ViewTasksComponent {

}
