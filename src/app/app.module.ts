import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ActiveCertificationsComponent } from './components/active-certifications/active-certifications.component';
import { CurrentSkillsetsComponent } from './components/current-skillsets/current-skillsets.component';
import { SkillsetCardComponent } from './components/skillset-card/skillset-card.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavListComponent,
    SidenavListComponent,
    ProfileComponent,
    ActiveCertificationsComponent,
    CurrentSkillsetsComponent,
    SkillsetCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
