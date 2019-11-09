import { Component, OnInit } from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-music-controls',
  templateUrl: './music-controls.component.html',
  styleUrls: ['./music-controls.component.scss']
})
export class MusicControlsComponent implements OnInit {

  constructor() { }

  wavesurfer: any;

  ngOnInit() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'green',
      progressColor: 'darkgreen'
    });

    this.wavesurfer.load('https://archive.org/download/SweetDreams_302/Eurythmics-SweetDreams.mp3');
    this.wavesurfer.setHeight(50);
  }

  onPlayClick() {
    this.wavesurfer.playPause();
  }

}
