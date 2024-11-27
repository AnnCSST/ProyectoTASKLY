import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientHttpService } from '../../services/client-http.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfilesComponent implements OnInit {
  profiles: any[] = [];

  constructor(private clientHttpService: ClientHttpService, private router: Router) { }

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.clientHttpService.getProfiles().subscribe(
      data => this.profiles = data,
      error => console.error('Error al obtener los perfiles:', error)
    );
  }

  goToProfileDetails(profileId: string): void {
    this.router.navigate(['/profile', profileId]);
  }
}
