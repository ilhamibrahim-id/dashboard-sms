import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
  deskripsi: any = 'Loading..';
  public resolved: boolean = false;
  ngOnInit(): void {
    this.spinner.show();
    setInterval(() => {
      this.spinner.hide();
      this.resolved = true;
    },500);
  }

}
