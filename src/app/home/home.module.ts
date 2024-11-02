import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HOME_ROUTES } from './home.routers';
import { MenuComponent } from '../components/menu/menu.component'; // Make sure MenuComponent is a standalone component as well
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES),
    HttpClientModule,
    FormsModule,
    HeaderComponent,  // Importing standalone HeaderComponent
    MenuComponent,     // If MenuComponent is also standalone, import it here
    FooterComponent    // Importing standalone FooterComponent
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  schemas: []
})
export class HomeModule { }
