import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { MusicControlsComponent } from './music-controls/music-controls.component';
import { BrowserComponent } from './browser/browser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';


const routes: Routes = [
  { path: 'test', component: MusicControlsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MusicControlsComponent,
    BrowserComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
 }
