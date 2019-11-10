import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserService } from './services/browser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private browserService: BrowserService) { }
  title = 'music-player';
  selectedSong: String;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onSelectedSong(event) {
    this.selectedSong = event;
  }

  onNextTrack() {
    console.log("Going to next track?");
    this.browserService.setCurrentSong(this.browserService.getNextSongPosition());
    this.selectedSong = this.browserService.getCurrentSong();
  }
}
