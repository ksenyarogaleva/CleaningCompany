import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/common-components/nav-menu/nav-menu.component';
import { AppFooterComponent } from './components/common-components/app-footer/app-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationModule } from './authorization.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizeInterceptor } from './services/authorization/authorize.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from '@angular/google-maps';
import { QuestionsAndAnswersComponent } from './components/questions-and-answers/questions-and-answers.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { PricesServicesComponent } from './components/prices-services/prices-services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateOrderRequestUserInfoModalComponent } from './components/modals/create-order-request-user-info-modal/create-order-request-user-info-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AppFooterComponent,
    QuestionsAndAnswersComponent,
    AboutUsComponent,
    HomeComponent,
    PricesServicesComponent,
    CreateOrderRequestUserInfoModalComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    AuthorizationModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
