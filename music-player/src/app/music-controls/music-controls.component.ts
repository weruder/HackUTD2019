import { Component, OnInit } from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-music-controls',
  templateUrl: './music-controls.component.html',
  styleUrls: ['./music-controls.component.scss']
})
export class MusicControlsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple'
  });

  wavesurfer.load('http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');
  }

}
