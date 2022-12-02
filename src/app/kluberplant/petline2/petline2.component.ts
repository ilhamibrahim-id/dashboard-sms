import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-petline2',
  templateUrl: './petline2.component.html',
  styleUrls: ['./petline2.component.css']
})
export class Petline2Component implements OnInit {
  prevgambar0: boolean = true;
  prevgambar: boolean = true;
  prevgambar2: boolean = true;
  prevgambar3: boolean = true;
  srcimage: any = 'assets/img/petline2_1.png';
  deskripsi: any = 'Loading..';
  public resolved: boolean = false;
  constructor(private spinner: NgxSpinnerService) {
    window.scrollTo(0, 0);
   }
  changeimage(){
    this.prevgambar0 = !this.prevgambar0;
    this.prevgambar = !this.prevgambar;
    this.prevgambar2 = !this.prevgambar2;
    this.srcimage = 'assets/img/petline2_2.png';
  }
  changeimage2(){
    this.prevgambar0 = !this.prevgambar0;
    this.prevgambar = !this.prevgambar;
    this.prevgambar2 = !this.prevgambar2;
    this.srcimage = 'assets/img/petline2_1.png';
  }
  changeimage3(){
    this.prevgambar0 = false;
    this.prevgambar = !this.prevgambar;
    this.prevgambar2 = !this.prevgambar2;
    this.prevgambar3 = !this.prevgambar3;
    this.srcimage = 'assets/img/petline2_3.png';
  }
  changeimage4(){
    this.prevgambar0 = false;
    this.prevgambar = !this.prevgambar;
    this.prevgambar2 = !this.prevgambar2;
    this.prevgambar3 = !this.prevgambar3;
    this.srcimage = 'assets/img/petline2_2.png';
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
