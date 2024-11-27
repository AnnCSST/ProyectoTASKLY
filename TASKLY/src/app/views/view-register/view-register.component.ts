import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { RegisterComponent } from '../../components/register/register.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-register',
  standalone: true,
  imports: [
    NavComponent,
    RegisterComponent,
    FooterComponent
  ],
  templateUrl: './view-register.component.html',
  styleUrl: './view-register.component.css'
})
export class ViewRegisterComponent {

}
