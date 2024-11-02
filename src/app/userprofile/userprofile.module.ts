import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [UserProfileComponent,MyProfileComponent],
  imports: [
    CommonModule,
  ],
  
  schemas: [NO_ERRORS_SCHEMA],
  // exports: [MyProfileComponent]
})
export class UserProfileModule {}
