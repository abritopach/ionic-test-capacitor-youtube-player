import { Component, OnInit, AfterViewInit } from '@angular/core';

import { YoutubePlayerWeb } from 'capacitor-youtube-player';

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
    this.initializeYoutubePlayerPluginWeb();
  }

  async initializeYoutubePlayerPluginWeb() {
    console.log('HomePage::initializeYoutubePlayerPluginWeb() | method called');
    const options = {playerId: 'youtube-player', playerSize: {width: 640, height: 360}, videoId: 'tDW2C6rcH6M'};
    const result = await YoutubePlayerWeb.initialize(options);
    console.log('playerReady', result);
  }

  async destroyYoutubePlayerPluginWeb() {
    console.log('HomePage::destroyYoutubePlayerPluginWeb() | method called');
    const result = await YoutubePlayerWeb.destroy('youtube-player');
    console.log('destroyYoutubePlayer', result);
  }

}
