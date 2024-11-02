import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule], // Import RouterModule for routing functionality
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router) {}

  logout() {
    // Perform logout logic here (e.g., clear tokens, user data)
    console.log('User logged out');
    
    // Redirect to the login page or home page after logout
    this.router.navigate(['/']);
  }
}
