import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'heineken';
  videoPlayer: HTMLVideoElement | any;

  @ViewChild('videoPlayer')
    set mainVideoEl(el: ElementRef) {
      this.videoPlayer = el.nativeElement;
    }

  constructor( private router: Router) {}

  ngOnInit(): void {
    this.clearRoute();
  }
  
  ngAfterViewInit( ) {
    this.startVideo();
  }

  startTimer() {
    setTimeout(() => {
        this.clearRoute();
        this.router.navigate(['/']);
    }, 180000);
  }

  clearRoute() {
    $('body').scrollTop(0);
    document.getElementById('clear')?.click();
  }

  startVideo() {
    this.videoPlayer.muted = true; 
    this.videoPlayer.play();
  }
}
