import { Component } from '@angular/core';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  standalone: true,
  imports: [MyProfileComponent,FormsModule,ReactiveFormsModule] // Import the standalone component

})
export class UserProfileComponent {
  
  user = {
    name: 'Aiswarya',
    email: 'aiswarya@example.com',
    bio: 'Software Developer at XYZ Company',
    imageUrl: 'assets/images/profile.jpeg' // Image path in assets folder

  };

  onProfileUpdate(updatedData: any) {
    console.log('Profile updated:', updatedData);
    this.user = { ...this.user, ...updatedData }; // Update the parent with child data
  }
}
