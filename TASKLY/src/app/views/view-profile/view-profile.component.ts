import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { ProfilesComponent } from '../../components/profile/profile.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [
    NavComponent,
    ProfilesComponent,
    FooterComponent
  ],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent {

}
