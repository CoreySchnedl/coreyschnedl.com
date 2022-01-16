import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { DemosComponent } from './components/demos/demos.component';
import { DynamodbStreamDemoComponent } from './components/dynamodb-stream-demo/dynamodb-stream-demo.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'demos', component: DemosComponent },
  { path: 'demos/dynamodb-streams', component: DynamodbStreamDemoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
