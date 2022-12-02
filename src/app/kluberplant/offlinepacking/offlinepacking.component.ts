import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-offlinepacking',
  templateUrl: './offlinepacking.component.html',
  styleUrls: ['./offlinepacking.component.css']
})
export class OfflinepackingComponent implements OnInit {

  prevgambar: boolean = true;
  srcimage: any = 'assets/img/offline1_1.png';
  deskripsi: any = 'Loading..';
  public resolved: boolean = false;
  constructor(private spinner: NgxSpinnerService) {
    window.scrollTo(0, 0);
   }
  changeimage(){
    this.prevgambar = !this.prevgambar;
    this.srcimage = 'assets/img/offline1_2.png';
  }
  changeimage2(){
    this.prevgambar = !this.prevgambar;
    this.srcimage = 'assets/img/offline1_1.png';
  }
  ngOnInit(): void {
    this.spinner.show();
    var count = 0;
    var a = setInterval(() => {
      count++;
      this.spinner.hide();
      this.resolved = true;
      if(count = 1){
        clearInterval(a);
      }
    },500);
  }
}
