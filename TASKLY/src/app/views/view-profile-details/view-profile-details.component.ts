import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { ProfileDetailsComponent } from "../../components/profile-details/profile-details.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-view-profile-details',
  standalone: true,
  imports: [NavComponent, ProfileDetailsComponent, FooterComponent],
  templateUrl: './view-profile-details.component.html',
  styleUrl: './view-profile-details.component.css'
})
export class ViewProfileDetailsComponent {

}
