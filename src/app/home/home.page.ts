import { Component, OnInit, AfterViewInit } from '@angular/core';

import { YoutubePlayer } from 'capacitor-youtube-player';

import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  currentYear = new Date().getFullYear();

  constructor() {
    console.log('HomePage::constructor() | method called');
  }

  ngOnInit() {
    console.log('HomePage::ngOnInit() | method called');
  }

  ngAfterViewInit() {
    if (Capacitor.getPlatform() === 'web') {
      this.initializeYoutubePlayerPluginWeb();
    } else { // Native
      this.initializeYoutubePlayerPluginNative();
    }
  }

  async initializeYoutubePlayerPluginWeb() {
    console.log('HomePage::initializeYoutubePlayerPluginWeb() | method called');
    const options = {playerId: 'youtube-player', playerSize: {width: 640, height: 360}, videoId: 'tDW2C6rcH6M', debug: true};
    const result = await YoutubePlayer.initialize(options);
    console.log('playerReady', result);

    (result as any).player.addEventListener('onPlaybackQualityChange', (event) => {
      console.log('playback quality is', event);
    });

    (result as any).player.addEventListener('onStateChange', (event) => {
      console.log('state is', event);
    });

    const options1 = {playerId: 'youtube-player1', playerSize: {width: 640, height: 360}, videoId: 'M1F81V-NhP0'};
    const result1 = await YoutubePlayer.initialize(options1);
    console.log('playerReady', result1);
  }

  async destroyYoutubePlayerPluginWeb() {
    console.log('HomePage::destroyYoutubePlayerPluginWeb() | method called');
    const result = await YoutubePlayer.destroy('youtube-player');
    console.log('destroyYoutubePlayer', result);
  }

  async getPlayersEventsStatePluginWeb() {
    console.log('HomePage::getPlayersEventsStatePluginWeb() | method called');
    const result = await YoutubePlayer.getAllPlayersEventsState();
    console.log('allPlayersEventsState', result);
  }

  async initializeYoutubePlayerPluginNative() {

    const options = {width: 640, height: 360, videoId: 'tDW2C6rcH6M'};
    // const playerReady = await YoutubePlayer.initialize(options);
  }

}
