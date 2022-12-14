import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

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
import { TwoWayDataComponent } from './components/two-way-data/two-way-data.component';
import { OthersComponent } from './components/others/others.component';
import { SingleDeveloperComponent } from './components/single-developer/single-developer.component';

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
    TwoWayDataComponent,
    OthersComponent,
    SingleDeveloperComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
