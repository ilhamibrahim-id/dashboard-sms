import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenanceproduct',
  templateUrl: './maintenanceproduct.component.html',
  styleUrls: ['./maintenanceproduct.component.css']
})
export class MaintenanceproductComponent implements OnInit {

  constructor() { }
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  ngOnInit(): void {
  }

}
