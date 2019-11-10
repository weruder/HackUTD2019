import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { MusicControlsComponent } from './music-controls/music-controls.component';
import { BrowserComponent } from './browser/browser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list'; 
import { MatSliderModule } from '@angular/material/slider';
import { AngularFileUploaderModule } from "angular-file-uploader";

const routes: Routes = [
  { path: 'test', component: MusicControlsComponent },
  { path: 'browser', component: BrowserComponent }
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
    MatListModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AngularFileUploaderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
