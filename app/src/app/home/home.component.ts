import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  videoPlayer: HTMLVideoElement | any;
  videoOpen = true;

  @ViewChild('videoPlayer')
    set mainVideoEl(el: ElementRef) {
      this.videoPlayer = el?.nativeElement;
    }

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.clearRoute();
  }
  
  ngAfterViewInit( ) {
    this.startVideo();
  }

  startTimer() {
    this.videoOpen = false;
    
    setTimeout(() => {
        this.clearRoute();
        this.router.navigate(['/']);
    }, 180000);
  }

  clearRoute() {
    this.videoOpen = true;
    $('body').scrollTop(0);
    this.startVideo();
  }

  startVideo() {
    if(!this.videoPlayer) return;

    this.videoPlayer.muted = true; 
    this.videoPlayer.play();
  }
}
