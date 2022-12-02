import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-bottle-shower',
  templateUrl: './bottle-shower.component.html',
  styleUrls: ['./bottle-shower.component.css']
})
export class BottleShowerComponent implements OnInit {

  public resolved: boolean = false;
  deskripsi: any = 'Loading..';
  constructor(private spinner: NgxSpinnerService) {
    window.scrollTo(0, 0);
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
