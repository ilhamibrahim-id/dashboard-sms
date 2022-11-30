import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petline1',
  templateUrl: './petline1.component.html',
  styleUrls: ['./petline1.component.css']
})
export class Petline1Component implements OnInit {
  prevgambar: boolean = true;
  srcimage: any = 'assets/img/petline1_1.png';
  constructor() { }
  changeimage(){
    this.prevgambar = !this.prevgambar;
    this.srcimage = 'assets/img/petline1_2.png';
  }
  changeimage2(){
    this.prevgambar = !this.prevgambar;
    this.srcimage = 'assets/img/petline1_1.png';
  }
  ngOnInit(): void {
  }

}
