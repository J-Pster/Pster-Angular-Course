import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { NumberShowComponent } from './components/number/number-show/number-show.component';
import { NumberChangerComponent } from './components/number/number-changer/number-changer.component';
import { ListDevelopersComponent } from './components/list-developers/list-developers.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProfileCardComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsComponent,
    NumberShowComponent,
    NumberChangerComponent,
    ListDevelopersComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
