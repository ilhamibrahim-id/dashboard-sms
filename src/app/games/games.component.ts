import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  playAudio(){
    let audio = new Audio();
    audio.src = "assets/audio.mp3";
    audio.load();
    audio.play();
  }
  constructor(private spinner: NgxSpinnerService) {
    window.scrollTo(0, 0);
   }
  deskripsi: any = 'Loading..';
  public resolved: boolean = false;
  ngOnInit(): void {
    this.spinner.show();
    var count = 0;
    var a = setInterval(() => {
      count++;
      this.spinner.hide();
      this.resolved = true;
      if(count = 1){
        clearInterval(a);
        this.playAudio();
      }
    },500);
  }

}
