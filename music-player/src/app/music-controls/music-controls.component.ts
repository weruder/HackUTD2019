import { Component, OnInit, Input, Output } from '@angular/core';
import * as WaveSurfer from 'wavesurfer.js';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-music-controls',
  templateUrl: './music-controls.component.html',
  styleUrls: ['./music-controls.component.scss']
})
export class MusicControlsComponent implements OnInit {

  constructor() { }
  @Input()
  set selectedSong(val: any) {
    this.wavesurfer.load(val);
  }
  @Output() nextTrack = new EventEmitter();
  isRepeating: boolean = false;
  wavesurfer: any;

  ngOnInit() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#21fc45',
      progressColor: 'green',
      barWidth: 2,
      barGap: 1
    });

    this.wavesurfer.setHeight(50);
  }

  onPlayClick() {
    this.wavesurfer.playPause();
  }

  onRepeat() {
    this.isRepeating = !this.isRepeating;
    if (this.isRepeating) {
      this.wavesurfer.on('finish', () => {
        this.wavesurfer.stop();
        this.wavesurfer.playPause();
      });
    }
    else {
      this.wavesurfer.un('finish');
    }
  }
  onVolumeChange(volume: number) {
    this.wavesurfer.setVolume(volume);
  }

  onNextTrackClick() {
    this.nextTrack.emit();
  }
}
