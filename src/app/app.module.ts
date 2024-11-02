import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { FooterComponent } from './components/footer/footer.component';  // Importing standalone FooterComponent
import { HeaderComponent } from './components/header/header.component';  // Importing standalone HeaderComponent
import { MenuComponent } from './components/menu/menu.component';  // Importing standalone MenuComponent
import { UserProfileModule } from './userprofile/userprofile.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HomeModule,
    UserProfileModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,  // Add the HeaderComponent here
    MenuComponent,     // Add the MenuComponent here
    FooterComponent,    // Add the FooterComponent here,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
