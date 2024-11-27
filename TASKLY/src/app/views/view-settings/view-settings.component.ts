import { Component } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { SettingsComponent } from '../../components/settings/settings.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-view-settings',
  standalone: true,
  imports: [
    NavComponent,
    SettingsComponent,
    FooterComponent
  ],
  templateUrl: './view-settings.component.html',
  styleUrl: './view-settings.component.css'
})
export class ViewSettingsComponent {

}
