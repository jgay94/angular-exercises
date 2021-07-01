import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CongratulationsMessageComponent } from './congratulations-message/congratulations-message.component';
import { CounterButtonPageComponent } from './counter-button-page/counter-button-page.component';
import { ParamsExampleComponent } from './params-example/params-example.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';
import { ButtonComponent } from './button/button.component';
import { DangerButtonComponent } from './danger-button/danger-button.component';
import { SuccessButtonComponent } from './success-button/success-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    PeopleListComponent,
    EventHandlingComponent,
    MultipleChoiceComponent,
    CounterButtonComponent,
    CongratulationsMessageComponent,
    CounterButtonPageComponent,
    ParamsExampleComponent,
    NotFoundPageComponent,
    UserInfoFormComponent,
    NavBarComponent,
    UserInfoDisplayComponent,
    ButtonComponent,
    DangerButtonComponent,
    SuccessButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
