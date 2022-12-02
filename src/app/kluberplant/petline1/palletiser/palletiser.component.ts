import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-palletiser',
  templateUrl: './palletiser.component.html',
  styleUrls: ['./palletiser.component.css']
})
export class PalletiserComponent implements OnInit {

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
