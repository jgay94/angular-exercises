import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterButtonPageComponent } from "./counter-button-page/counter-button-page.component";
import { EventHandlingComponent } from "./event-handling/event-handling.component";
import { ExampleComponent } from './example/example.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  { path: 'counter-button', component: CounterButtonPageComponent },
  { path: 'event-handling', component: EventHandlingComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'multiple-choice', component: MultipleChoiceComponent },
  { path: 'people-list', component: PeopleListComponent },
  { path: '', redirectTo: '/counter-button', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
