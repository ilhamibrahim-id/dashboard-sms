import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-apps-link',
  templateUrl: './apps-link.component.html',
  styleUrls: ['./apps-link.component.css']
})
export class AppsLinkComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.resolved = true;
    }, 400);
    function NewTab() {
      window.open(
      "https://192.168.152.32/plan_am", "_blank");
  }
  }

}
