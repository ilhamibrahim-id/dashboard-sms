import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;
  public loaddata: any;

  async ngOnInit(): Promise<void> {
    this.loaddata = new Promise(resolve => {
      this.spinner.show();
      this.spinner.hide();
      this.resolved = true;
    });
    this.loaddata = await this.loaddata;
  }

}
