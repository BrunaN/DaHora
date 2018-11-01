import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UserService } from './services/User.service';
import { LoginService } from './services/login.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
