import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';


export const ROUTES: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: '', component: AppComponent},
  {path: '**', component: NotFoundComponent}
];
