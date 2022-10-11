import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-suit',
  templateUrl: './suit.component.html',
  styleUrls: ['./suit.component.css']
})
export class SuitComponent implements OnInit {
  deskripsi: any = 'Loading..';
  public resolved: boolean = false;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setInterval(() => {
      this.spinner.hide();
      this.resolved = true;
    },500);
  }

}
