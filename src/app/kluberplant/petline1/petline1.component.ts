import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-petline1',
  templateUrl: './petline1.component.html',
  styleUrls: ['./petline1.component.css']
})
export class Petline1Component implements OnInit {
  prevgambar: boolean = true;
  prevgambar2: boolean = true;
  injectmodel: boolean = true;
  bottleshower: boolean = true;
  srcimage: any = 'assets/img/petline1_1.png';
  deskripsi: any = 'Loading..';
  public resolved: boolean = false;
  constructor(private spinner: NgxSpinnerService) {
    window.scrollTo(0, 0);
   }
  changeimage(){
    this.prevgambar = !this.prevgambar;
    this.prevgambar2 = !this.prevgambar2;
    this.srcimage = 'assets/img/petline1_2.png';
  }
  changeimage2(){
    this.prevgambar = !this.prevgambar;
    this.prevgambar2 = !this.prevgambar2;
    this.srcimage = 'assets/img/petline1_1.png';
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
