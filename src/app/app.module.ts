import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import 'hammerjs';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {UserService} from './services/user.service';
import {BaseUrl} from './models/BaseUrl';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ProcessHttpmsgService} from './services/process-httpmsg.service';
import { AppRoutingModule} from './app-routing/app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from './auth/auth.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DisplayresultsComponent } from './displayresults/displayresults.component';
import { FinalresultsComponent } from './finalresults/finalresults.component';
import { StartbalayagesComponent } from './startbalayages/startbalayages.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    DisplayresultsComponent,
    FinalresultsComponent,
    StartbalayagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    HttpModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [UserService,
    ProcessHttpmsgService,
    {provide :'BaseURL',useValue: BaseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
