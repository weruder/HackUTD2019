import { Component, OnInit, Input } from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-music-controls',
  templateUrl: './music-controls.component.html',
  styleUrls: ['./music-controls.component.scss']
})
export class MusicControlsComponent implements OnInit {

  constructor() { }
  @Input()
  set selectedSong(val: any) {
    console.log("Test");
    this.wavesurfer.load(val);
  }
  isRepeating:boolean=false;
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

  onRepeat()
  {
    this.isRepeating = !this.isRepeating;
    if(this.isRepeating)
    {
      this.wavesurfer.on('finish', () =>{
        this.wavesurfer.stop();
        this.wavesurfer.playPause();
      });
    }
    else
    {
      this.wavesurfer.un('finish');
    }
  }

}
