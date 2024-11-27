import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientHttpService } from '../../services/client-http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  profileId: string | null = null;
  profile: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientHttpService: ClientHttpService
  ) {}

  ngOnInit(): void {
    this.profileId = this.route.snapshot.paramMap.get('id');
    if (this.profileId) {
      this.loadProfileDetails(this.profileId);
    }
  }

  loadProfileDetails(profileId: string): void {
    this.clientHttpService.getProfileById(Number(profileId)).subscribe(
      data => this.profile = data,
      error => console.error('Error al obtener los detalles del perfil:', error)
    );
  }

  goBack(): void {
    this.router.navigate(['/profile']);
  }
}
