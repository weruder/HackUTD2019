import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserService {

  constructor() { }

  private songs: Array<String> = new Array<String>();
  private currentSong: String;
  private currentSongPosition: number;

  getSongs() {
    return this.songs;
  }

  addSong(song: string) {
    this.songs.push(song);
  }

  setCurrentSong(index: number) {
    this.currentSongPosition = index;
    this.currentSong = this.songs[index];
  }

  getNextSongPosition() {
    if (this.currentSongPosition < this.songs.length) {
      return this.currentSongPosition + 1;
    }
    else {
      return 0;
    }
  }

  getCurrentSong() {
    return this.currentSong;
  }

  getPreviousSongPosition() {

  }
}
