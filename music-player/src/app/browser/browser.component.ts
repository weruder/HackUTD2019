import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BrowserService } from '../services/browser.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {

  constructor(private browserService: BrowserService) { }
  @Output() selectedSong = new EventEmitter();
  playlist: Array<String>;
  currentSongPosition: number = 0;

  ngOnInit() {
    this.browserService.addSong('https://archive.org/download/SweetDreams_302/Eurythmics-SweetDreams.mp3');
    this.browserService.addSong('https://archive.org/download/NeverGonnaGiveYouUp/jocofullinterview41.mp3');
    this.browserService.addSong('https://archive.org/download/AHaTakeOnMeOfficialMusicVideo/a-ha%20-%20Take%20On%20Me%20%28Official%20Music%20Video%29.mp3');

    // this.playlist.push('https://archive.org/download/SweetDreams_302/Eurythmics-SweetDreams.mp3');
    // this.playlist.push('https://archive.org/download/NeverGonnaGiveYouUp/jocofullinterview41.mp3');
    // this.playlist.push('https://archive.org/download/AHaTakeOnMeOfficialMusicVideo/a-ha%20-%20Take%20On%20Me%20%28Official%20Music%20Video%29.mp3');
    this.playlist = this.browserService.getSongs();
  }

  onListItemClick(song: string) {
    this.selectedSong.emit(song);
    this.currentSongPosition = this.playlist.indexOf(song);
  }
}
