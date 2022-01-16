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
import { DemosComponent } from './components/demos/demos.component';
import { DemoCardComponent } from './components/demo-card/demo-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DynamodbStreamDemoComponent } from './components/dynamodb-stream-demo/dynamodb-stream-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ContactService } from './services/contact.service';
import { HttpClientModule } from '@angular/common/http';
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
    HomeComponent,
    DemosComponent,
    DemoCardComponent,
    NotFoundComponent,
    DynamodbStreamDemoComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
