import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnChanges {
  @Input() user: any;
  @Output() updateProfile = new EventEmitter<any>();

  editMode: boolean = false;
  updatedUser: any = {
    name: '',
    email: '',
    bio: ''
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && changes['user'].currentValue) {
      this.updatedUser = { ...changes['user'].currentValue };
    }
  }

  enableEdit() {
    this.editMode = true;
  }

  saveChanges() {
    this.editMode = false;
    this.updateProfile.emit(this.updatedUser);
  }
}