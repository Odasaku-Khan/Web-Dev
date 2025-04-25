import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {
  fullName = 'Гость';
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToJobList() {
    this.router.navigate(['/dashboard/skills']); // or job list if you have one
  }

  navigateToSpecialists() {
    this.router.navigate(['/dashboard/profile']); // or specialists page
  }

  navigateToCreateVacancy() {
    this.router.navigate(['/dashboard/home']); // example placeholder
  }

  navigateToAiAssistant() {
    this.router.navigate(['/dashboard/chat/1']); // or your AI assistant route
  }

  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    this.router.navigate(['/login']);
  }
  get isLoggedIn(): boolean {
    return !!localStorage.getItem('access');
  }
}