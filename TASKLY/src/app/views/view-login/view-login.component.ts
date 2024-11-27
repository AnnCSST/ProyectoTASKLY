import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { LoginComponent } from '../../components/login/login.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-login',
  standalone: true,
  imports: [
    NavComponent,
    LoginComponent,
    FooterComponent
  ],
  templateUrl: './view-login.component.html',
  styleUrl: './view-login.component.css'
})
export class ViewLoginComponent {

}
